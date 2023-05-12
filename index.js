const { log } = require("console");
const express = require("express");
const dotenv = require("dotenv").config();
const fs = require("fs");
const PORT = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  fs.readFile("./pages/index.html", (err, data) => {
    if (err) {
      console.log("Erro", err);
      res.send("Seomething went wrong");
    } else {
      res.write(data);
      res.send();
    }
  });
});

app.get("/about", (req, res) => {
  res.status(200).json({
    message: "This is from about route",
  });
});

app.get("/help", (req, res) => {
  res.status(200).json({
    message: "This is from help route",
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

function handler(req, res, next) {}
