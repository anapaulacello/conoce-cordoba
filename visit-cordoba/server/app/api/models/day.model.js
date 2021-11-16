const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DaySchema = new Schema({
    date: { type: String, required: true },
    actions: [{ type: Schema.Types.ObjectId, ref: "action"}]
});

const Day = mongoose.model("day", DaySchema);
module.exports = Day;