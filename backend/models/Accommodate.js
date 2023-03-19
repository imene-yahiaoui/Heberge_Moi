const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const accommodateSchema = mongoose.Schema({
  // id: { type: String },
  title: { type: String },
  description: { type: String },
  //pictures: { type: String },
  cover: { type: String, required: true },
  host: {
    name: { type: String },
    // picture: { type: String },
    numberfone: { type: Number },
    email: { type: String },
  },
 // picture:{ type: String },
  price: { type: Number },
  rating: { type: String },
  location: { type: String },
  equipments: [{ type: String }],
});

module.exports = mongoose.model("Accommodate", accommodateSchema);
