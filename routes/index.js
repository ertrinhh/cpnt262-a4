const express = require("express");
const router = express.Router();
const api = require("./api/v0");

router.use((req, res, next) => {
  res.locals = config;
  next();
});

router.get("/", (req, res) => {
  res.render("pages/index", { pageTitle: "Home" });
});

router.get("/register", (req, res) => {
  res.render("pages/register", { pageTitle: "Register" });
});

router.get("/login", (req, res) => {
  res.render("pages/login", { pageTitle: "Login" });
});

router.get("/definitions", (req, res) => {
  res.render("pages/definition-list", { pageTitle: "Put a loop on it" });
});

router.use("/api/v0", api);

module.exports = router;
