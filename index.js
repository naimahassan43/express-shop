const express = require("express");
const app = express();

const bicycles = require("./data/data.json");

//Template engine
app.set("view engine", "ejs");

//static files_directories
app.use(express.static("public"));

//Routes
app.get("/", (req, res) => {
  return res.render("bicycles");
});
app.get("/bicycle", (req, res) => {
  const bicycle = bicycles.find((b) => b.id === req.query.id);
  return res.render("overview");
});

app.listen(3000, () => console.log("Server running"));
