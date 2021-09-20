const express = require("express");
const path = require("path");

const app = express();

const port = process.env.port || 5000;

const publicPath = path.resolve(__dirname, "/public");
app.use(express.static(public));

app.listen(port, () =>
  console.log("El servidor esta andando perfectamente http://localhost:5000")
);

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "/views/home.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/login.html"));
});
