const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const accommodateSchema = mongoose.Schema({
  // id: { type: String },
  title: { type: String, required: true },
  description: { type: String, required: true },
  //picture: { type: String },
  cover: { type: String, required: true },
  host: {
    name: { type: String , required: true},
    // picture: { type: String },
    numbrePhone: { type: Number, required: true },
    email: { type: String , required: true},
  },
  // picture:{ type: String },
  price: { type: Number , required: true},
  rating: { type: String , required: true},
  location: { type: String , required: true},
  //equipments: [{ type: String }],
});

module.exports = mongoose.model("Accommodate", accommodateSchema);
