const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/flappy", (req, res) => {
  res.render("flappy.ejs");
});
app.get("/guess", (req, res) => {
  res.render("guess.ejs");
});
app.get("/num", (req, res) => {
  res.render("num.ejs");
});

app.listen(port, () => {
  console.log("Server running on port 8080");
});
