const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;
app.use(express.static("public"));


 app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/views", "/index.html"))});

app.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname, "/views", "/login.html"));
});
app.get("/register", function (req, res) {
  res.sendFile(path.join(__dirname, "/views", "/register.html"));
});
app.post("/register", function (req, res) {
  res.sendFile(path.join(__dirname, "/views", "/register.html"));
});
app.post("/", function (req, res) {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.listen(PORT , function(){
  console.log("Funciona en el http://localhost:5000")}) 