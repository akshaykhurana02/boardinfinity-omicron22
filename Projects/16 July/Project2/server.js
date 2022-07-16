const express = require("express"); // ES 5 Conventon
const mongoose = require("mongoose");
require("dotenv").config(); // It will assure now we can read .env file

const app = express();
const port = process.env.PORT;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", (e) => console.error(`Error occured : ${e}`));
db.on("open", () => console.log("Connected to Cloud Database!"));

app.use(express.json());

const subscribersRouter = require("./routes/subscribers");
app.use("/subscribers", subscribersRouter);

const contactRouter = require("./routes/contact");
app.use("/contact", contactRouter);

const airBnbRouter = require("./routes/airbnb");
app.use("/airbnb", airBnbRouter);

app.listen(port, () => {
  console.log(`Server has started at port ${port}!`);
});
