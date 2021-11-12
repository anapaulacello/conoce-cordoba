const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    adress: { type: String, required: true },
    hour: { type: String, required: true },
});

const Restaurant = mongoose.model("restaurant", RestaurantSchema);
module.exports = Restaurant;