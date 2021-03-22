// initiate new project, import express
const path = require("path");
const express = require("express");
const app = express();

//use project in public folder
app.use(express.static(path.join(__dirname, "public")));

//create 404 page
app.use(function (request, response) {
  response.status(404);
  response.sendFile(__dirname, "/404.html");
});

//server port, use 3000 when process.env not found
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`listening on port: ${PORT}`);
});
