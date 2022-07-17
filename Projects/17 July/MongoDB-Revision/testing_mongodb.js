const { MongoClient } = require("mongodb");

async function main() {
  const client = new MongoClient(
    "mongodb+srv://dbUser:dbUser123@cluster0.sclv3.mongodb.net/?retryWrites=true&w=majority"
  );
  try {
    await client.connect(); // This is used for connecting to the cluster
    // await listDatabases(client);

    // Create Operations

    // await createListing(client, {
    //   name: "A Beautiful Villa",
    //   summary: "A marvellous place in Goa!",
    //   bedrooms: 3,
    //   bathroom: 3,
    // });

    // await createMultipleListings(client, [
    //   {
    //     name: "Infinite Views",
    //     summary: "Modern home with infinite views from the infinity pool",
    //     property_type: "House",
    //     bedrooms: 5,
    //     bathrooms: 4.5,
    //     beds: 5,
    //   },
    //   {
    //     name: "Private room in London",
    //     property_type: "Apartment",
    //     bedrooms: 1,
    //     bathroom: 1,
    //   },
    //   {
    //     name: "Beautiful Beach House",
    //     summary:
    //       "Enjoy relaxed beach living in this house with a private beach",
    //     bedrooms: 4,
    //     bathrooms: 2.5,
    //     beds: 7,
    //     last_review: new Date(),
    //   },
    // ]);

    // await findMultipleListingsByName(client, "Infinite Views");

    // await findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews(client, {
    //   minimumNumberOfBedrooms: 4,
    //   minimumNumberOfBathrooms: 3,
    //   maximumNumberOfResults: 7,
    // });

    // Update Operation

    // await updateListingsByName(client, "Private room in London", {
    //   bedrooms: 2,
    //   beds: 2,
    // });

    //await updateAllListingsToHavePropertyType(client);

    // Delete Operation

    await deleteMultipleListingsByName(client, "Infinite Views");
  } catch (e) {
    console.error(e);
  } finally {
    await client.close(); // This is used for disconnecting to the cluster
  }
}

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  console.log("Databases: ");
  databasesList.databases.forEach((db) => {
    console.log(`- ${db.name}`);
  });
}

// This function is for adding a single listing
async function createListing(client, newListing) {
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .insertOne(newListing);
  console.log(`New listing created with id: ${result.insertedId}`);
}

// This function is for adding multiple listings
async function createMultipleListings(client, newListings) {
  const result = await client
    .db("sample_airbnb")
    .collection("newListings")
    .insertMany(newListings); // Array of object

  console.log(result);
  console.log(
    `${result.insertedCount} new listing(s) created with the following id(s):`
  );
  console.log(result.insertedIds);
}

// This function is for finding a single Listing
async function findOneListingByName(client, nameOfListing) {
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .findOne({ name: nameOfListing }); // findOne returns an object, which we can directly use

  if (result) {
    console.log(
      `Found a listing in the collection with the name '${nameOfListing}':`
    );
    console.log(result);
  } else {
    console.log(`No listings found with the name '${nameOfListing}'`);
  }
}

// This function is for finding multiple listings
async function findMultipleListingsByName(client, nameOfListing) {
  const cursor = await client
    .db("sample_airbnb")
    .collection("newListings")
    .find({ name: nameOfListing }); // find returns a Cursor Object ===== Object[] or ArrayList

  console.log(cursor);
  const results = await cursor.toArray();

  if (results.length > 0) {
    console.log(
      `Found ${results.length} listing(s) in the collection with the name '${nameOfListing}':`
    );
    console.log(results);
  } else {
    console.log(`No listings found with the name '${nameOfListing}'`);
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
      bathrooms: { $lte: minimumNumberOfBathrooms },
    })
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
    .collection("newListings")
    .updateOne({ name: nameOfListing }, { $set: updatedListing });

  console.log(`${result.matchedCount} document(s) matched the query criteria.`);
  console.log(`${result.modifiedCount} document(s) was/were updated.`);
}

async function updateListingsByName(client, nameOfListing, updatedListing) {
  const result = await client
    .db("sample_airbnb")
    .collection("newListings")
    .updateMany({ name: nameOfListing }, { $set: updatedListing });

  console.log(`${result.matchedCount} document(s) matched the query criteria.`);
  console.log(`${result.modifiedCount} document(s) was/were updated.`);
}

async function updateAllListingsToHavePropertyType(client) {
  const result = await client
    .db("sample_airbnb")
    .collection("newListings")
    .updateMany(
      { property_type: { $exists: false } },
      { $set: { property_type: "Unknown" } }
    );
  console.log(`${result.matchedCount} document(s) matched the query criteria.`);
  console.log(`${result.modifiedCount} document(s) was/were updated.`);
}

async function deleteListingByName(client, nameOfListing) {
  const result = await client
    .db("sample_airbnb")
    .collection("newListings")
    .deleteOne({ name: nameOfListing });
  console.log(`${result.deletedCount} document(s) was/were deleted.`);
}

async function deleteMultipleListingsByName(client, nameOfListing) {
  const result = await client
    .db("sample_airbnb")
    .collection("newListings")
    .deleteMany({ name: nameOfListing });
  console.log(`${result.deletedCount} document(s) was/were deleted.`);
}
main().catch(console.error);
