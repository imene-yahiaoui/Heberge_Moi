const mongoose = require("mongoose");

const accommodateSchema = mongoose.Schema({
  // id: { type: String },
   title: { type: String   },
   description: { type: String },
  //  pictures: [{ type: String }],
  cover: { type: String , required:true},
  // host: {
  //   name: { type: String },
  //picture: { type: String },
  // },
  // // price: { type: Number, required: true },
  rating: { type: String },
   location: { type: String },
  // equipments: [{ type: String }],
  // tags: [{ type: String }],
});

module.exports = mongoose.model("Accommodate", accommodateSchema);
