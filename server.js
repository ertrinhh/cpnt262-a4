// initiate new project, import express and dotenv
const path = require("path");
const express = require("express");
const app = express();
require("dotenv").config();
const index = require("./routes");

//midwareeee
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

//routes
app.use("/", index);

//create 404 page
app.use(function (request, response) {
  response.status(404);
  response.sendFile(__dirname + "/public/404.html");
});

//server port, use 3000 when process.env not found
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`listening on port: ${PORT}`);
});
