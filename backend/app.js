const express = require("express");
const path = require("path");
const accommodateRoutes = require("./routes/accommodate");
const abouteRoutes = require("./routes/aboute");
const userRoutes = require("./routes/user");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://ImeneYahiaoui:19921983@clusters.enxcmzl.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log(Error, "Connexion à MongoDB échouée !"));

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());
app.use("/api/accommodate", accommodateRoutes);
app.use("/api/aboute", abouteRoutes);
app.use("/api/auth", userRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/pictures", express.static(path.join(__dirname, "pictures")));
module.exports = app;
