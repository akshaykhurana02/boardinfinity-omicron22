const express = require("express");
const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => { // Root Route
  res.send("hello world");
});

app.get("/contact", (req, res) => {
    res.send("Contact Information");
});

app.get("/xyz", (req, res) => {
    res.send("XYZ");
});