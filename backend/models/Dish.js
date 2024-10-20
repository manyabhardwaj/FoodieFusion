// models/Dish.js
const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
  name: { type: String, required: true },
  region: { type: String, required: true },
  ingredients: { type: [String], required: true },
  preparationSteps: { type: [String], required: true },
  imageUrl: { type: String, required: true },
});

const Dish = mongoose.model('Dish', dishSchema);
module.exports = Dish;
