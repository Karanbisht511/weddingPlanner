const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const photographer = new Schema({
  details: {
    name: { type: String, required: true },
    mobile: { type: Number, minlength: 10, maxlength: 10, required: true },
    experience: { type: Number, required: true },
    pincode: { type: Number, minlength: 6, maxLength: 6, required: true },
    address: { type: String, required: true },
    price: { type: Number, required: true },
  },
  image: { type: Object, required: true },
});

module.exports = mongoose.model("photographer", photographer);
