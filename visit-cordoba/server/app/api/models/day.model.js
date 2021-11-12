const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DaySchema = new Schema({
    date: { type: String, required: true ,unique:true},
    restaurants: [{ type: Schema.Types.ObjectId, ref: "restaurant"}],
    discos: [{ type: Schema.Types.ObjectId, ref: "disco"}],
    cultures: [{ type: Schema.Types.ObjectId, ref: "culture"}]
});

const Day = mongoose.model("day", DaySchema);
module.exports = Day;