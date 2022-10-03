const express = require("express");
const app = express();
const port = 3000;

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  // Root Route
  res.send("Hello World!");
});

app.get("/contact", (req, res) => {
  res.send("Contact Information");
});

app.get("/xyz", (req, res) => {
  res.send("XYZ");
});

app.listen(port, () => {
  console.log(`Server running at port ${port}!`);
});
