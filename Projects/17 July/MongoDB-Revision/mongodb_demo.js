const { MongoClient } = require("mongodb");

async function main() {
  const uri =
    "mongodb+srv://dbUser:dbUser123@cluster0.sclv3.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    //await listDatabases(client);

    // Create Operations

    // await createListing(client, {
    //   name: "Board",
    //   summary: "A charming loft in Noida!",
    //   bedrooms: 1,
    //   bathroom: 1,
    // });

    // await createMultipleListings(client, [
    //   {
    //     name: "Board Infinity - Infinite Views",
    //     summary: "Modern home with infinite views from the infinity pool",
    //     property_type: "House",
    //     bedrooms: 5,
    //     bathrooms: 4.5,
    //     beds: 5,
    //   },
    //   {
    //     name: "Board Infinity - Private room in London",
    //     property_type: "Apartment",
    //     bedrooms: 1,
    //     bathroom: 1,
    //   },
    //   {
    //     name: "Board Infinity - Beautiful Beach House",
    //     summary:
    //       "Enjoy relaxed beach living in this house with a private beach",
    //     bedrooms: 4,
    //     bathrooms: 2.5,
    //     beds: 7,
    //     last_review: new Date(),
    //   },
    // ]);

    // Read Operations

    // 1
    // await findOneListingByName(
    //   client,
    //   "Board Infinity - Beautiful Beach House"
    // );

    // Multiple
    // await findMultipleListingsByName(client, "Board");

    // await findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews(client, {
    //   name: "Board"
    // });

    // Update Operations

    // await updateListingByName(client, "Board", {
    //   bedrooms: 6,
    //   beds: 8,
    // });

    // await updateListingByName(client, "Board", {
    //   bedrooms: 1,
    //   beds: 1,
    // });

    // Delete One
    // await deleteOneListingByName(client, "Board");

    // Delete Many
    // await deleteMultipleListingsByName(client, "Board");
    
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  console.log("Databases: ");
  databasesList.databases.forEach((db) => {
    console.log(`- ${db.name}`);
  });
}

async function createListing(client, newListing) {
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .insertOne(newListing);
  console.log(`New listing created with id: ${result.insertedId}`);
}

async function createMultipleListings(client, newListings) {
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .insertMany(newListings);

  console.log(
    `${result.insertedCount} new listing(s) created with the following id(s):`
  );
  console.log(result.insertedIds);
}

async function findOneListingByName(client, nameOfListing) {
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .findOne({ name: nameOfListing });

  if (result) {
    console.log(
      `Found a listing in the collection with the name '${nameOfListing}':`
    );
    console.log(result);
  } else {
    console.log(`No listings found with the name '${nameOfListing}'`);
  }
}

async function findMultipleListingsByName(client, nameOfListing) {
  const cursor = client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .find({ name: { $regex: nameOfListing } });

  const results = await cursor.toArray();

  if (results.length > 0) {
    console.log(`Found listing(s) with given name "${nameOfListing}":`);
    console.log(`Listings : ${results}`);
  } else {
    console.log(`No listings found with given name "${nameOfListing}"`);
  }
}

async function findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews(
  client,
  {
    minimumNumberOfBedrooms = 0,
    minimumNumberOfBathrooms = 0,
    maximumNumberOfResults = Number.MAX_SAFE_INTEGER,
  } = {}
) {
  const cursor = client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .find({
      bedrooms: { $gte: minimumNumberOfBedrooms },
      bathrooms: { $gte: minimumNumberOfBathrooms },
    })
    .sort({ last_review: -1 })
    .limit(maximumNumberOfResults);

  const results = await cursor.toArray();

  if (results.length > 0) {
    console.log(
      `Found listing(s) with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms:`
    );
    results.forEach((result, i) => {
      date = new Date(result.last_review).toDateString();

      console.log();
      console.log(`${i + 1}. name: ${result.name}`);
      console.log(`   _id: ${result._id}`);
      console.log(`   bedrooms: ${result.bedrooms}`);
      console.log(`   bathrooms: ${result.bathrooms}`);
      console.log(
        `   most recent review date: ${new Date(
          result.last_review
        ).toDateString()}`
      );
    });
  } else {
    console.log(
      `No listings found with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms`
    );
  }
}

async function updateListingByName(client, nameOfListing, updatedListing) {
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .updateOne({ name: nameOfListing }, { $set: updatedListing });

  console.log(`${result.matchedCount} document(s) matched the query criteria.`);
  console.log(`${result.modifiedCount} document(s) was/were updated.`);
}

async function upsertListingByName(client, nameOfListing, updatedListing) {
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .updateOne(
      { name: nameOfListing },
      { $set: updatedListing },
      { upsert: true }
    );
  console.log(`${result.matchedCount} document(s) matched the query criteria.`);

  if (result.upsertedCount > 0) {
    console.log(
      `One document was inserted with the id ${result.upsertedId._id}`
    );
  } else {
    console.log(`${result.modifiedCount} document(s) was/were updated.`);
  }
}

async function deleteOneListingByName(client, nameOfListing) {
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .deleteOne({ name: nameOfListing });

  if (result) {
    console.log(
      `Deleted a listing in the collection with the name '${nameOfListing}':`
    );
    console.log(result);
  } else {
    console.log(`No listings found with the name '${nameOfListing}'`);
  }
}

// async function deleteMultipleListingsByName(client, nameOfListing) {
//   const result = await client
//     .db("sample_airbnb")
//     .collection("listingsAndReviews")
//     .deleteMany({ name: { $regex: nameOfListing } });

//   console.log(`Result -> ${result.toArray()}`);

//   if (result) {
//     console.log(
//       `Deleted ${result.length} listing(s) in the collection with the name '${nameOfListing}':`
//     );
//   } else {
//     console.log(`No listings found with the name '${nameOfListing}'`);
//   }
// }