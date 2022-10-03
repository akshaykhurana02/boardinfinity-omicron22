const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  console.log("Root Route!");
  res.render("main-route", { fruit: "Default Route" });
});

app.get("/mango", async (req, res) => {
  console.log("Root Route!");
  res.render("main-route", { fruit: "Mango" });
});

app.get("/orange", async (req, res) => {
  console.log("Root Route!");
  res.render("main-route", { fruit: "Orange" });
});

app.listen(3000);
