const mongoose = require("mongoose");

const accommodateSchema = mongoose.Schema({
  // id: { type: String },
  title: { type: String , required: true  },
  description: { type: String },
  pictures: [{ type: String }],
  cover: { type: String },
  host: {
    name: { type: String },
    picture: { type: String },
  },
  // price: { type: Number, required: true },
  rating: { type: String },
  location: { type: String },
  equipments: [{ type: String }],
  tags: [{ type: String }],
});

module.exports = mongoose.model("Accommodate", accommodateSchema);
