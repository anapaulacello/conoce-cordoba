const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActionSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    adress: { type: String, required: true },
    hour: { type: String, required: true },
    actionEnum:{type:String, enum:["restaurant","disco","culture"]}
});

const Action = mongoose.model("action", ActionSchema);
module.exports = Action;

