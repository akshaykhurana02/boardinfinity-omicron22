const express = require("express");
const app = express();
const port = 3000;

// Root Route
app.get("/", (req, res) => {
  res.send("Namaste JavaScript!");
});

// Contact Route
app.get("/contact", (req, res) => {
  res.send("Contact Information");
});

// Aboute Route
app.get("/about", (req, res) => {
  res.send("About");
});

// XYZ Route
app.get("/xyz", (req, res) => {
  res.send("XYZ");
});

app.listen(port, () => {
  console.log(`My server running at port ${port}!`);
});
