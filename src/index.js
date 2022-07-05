// setting up for api routing to the office quotes api
const path = require("path");
const axios = require("axios");
const morgan = require("morgan");
const express = require("express");
const volleyball = require("volleyball");
const app = express();
module.exports = app;

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// logging middleware for requests
app.use(morgan("dev"));
app.use(volleyball);

// static assets
app.use(express.static(path.join(__dirname, "..", "public")));

// Sends our index.html (the "single page" of our SPA)
app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
app.get("/", (req, res, next) => {
  try {
    res.redirect("/quotes");
  } catch (err) {
    next(err);
  }
});

app.get("/quotes", async (req, res, next) => {
  try {
    app.get('https://cors-anywhere.herokuapp.com/https://officeapi.dev/api/quotes/random')
    // somehow need to figure out how to fetch something from an api?
    console.log(req.body);
    res.send(req.body);
  } catch (err) {
    next(err);
  }
});

app.use((req, res, next) => {
  if (path.extname(req.path).length > 0) {
    res.status(404).end();
  } else {
    next();
  }
});

app.use((err, req, res, next) => {
  console.error(err, typeof next);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});
