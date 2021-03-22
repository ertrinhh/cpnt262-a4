const express = require("express");
const router = express.Router();
const gallery = require("../../../data/gallery");

router.get("/gallery", function (request, response) {
  response.json(gallery);
});

module.exports = router;
