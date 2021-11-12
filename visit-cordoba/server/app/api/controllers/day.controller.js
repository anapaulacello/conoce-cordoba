const Day = require("../models/day.model");
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");

const createDay = async (req, res, next) => {
    try {
        const newDay = new Day();
        newDay.date = req.body.date;
        newDay.restaurants = req.body.restaurants;
        newDay.discos = req.body.discos;
        newDay.cultures = req.body.cultures;
        const DayDb = await newDay.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { day: DayDb}
        })
    } catch (error) {
        return next(error);
    }
}

const getAllDays = async (req, res, next) => {
    try {
        const day = await Day.find().populate("restaurants").populate("discos").populate("cultures");
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { day: day }
        })
    } catch (error) {
        return next(error);
    }
}

const getDayByDate = async (req, res, next) => {
    try {
        const { date } = req.params;
        console.log(req.params)
        const dayDateId = await Day.find({date});
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { Date: dayDateId }
        })
    } catch (error) {
        return next(error)
    }
}

module.exports = { createDay, getAllDays, getDayByDate }

//TODO updateDay