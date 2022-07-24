import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
// import RestaurantsDAO from "./dao/restaurantsDAO.js"; // DAO -> Data Access Object
// import ReviewsDAO from "./dao/reviewsDAO.js";
dotenv.config();
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

MongoClient.connect(process.env.RESTREVIEWS_DB_URI, {
  useUnifiedTopology: true,
})
  .then(async (client) => {
    // await RestaurantsDAO.injectDB(client);
    // await ReviewsDAO.injectDB(client);
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  });