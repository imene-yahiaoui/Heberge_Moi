const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const abouteSchema = mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  //   key: { type: String, required: true },
});

module.exports = mongoose.model("Aboute", abouteSchema);
