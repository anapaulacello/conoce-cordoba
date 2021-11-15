const Day = require("../models/day.model");
const Restaurant= require("../models/restaurant.model")
const Disco= require("../models/disco.model")
const User=require("../models/user.model")

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
        const dayDate = await Day.findOne({date:date}).populate("discos").populate("restaurants").populate("cultures");
        console.log("esto es date")
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { Date: dayDate }
        })
    } catch (error) {
        return next(error)
    }
}

const updateDay= async(req,res,next)=>{
    try{
        const {_id}=req.body;
            if(req.body.discos){
                await Day.findOneAndUpdate({_id:_id},{$addToSet:{discos:req.body.discos}});
            }
            if(req.body.restaurants){
                await Day.findOneAndUpdate({_id:_id},{$addToSet:{restaurants:req.body.restaurants}});
            }
            if(req.body.cultures){
                await Day.findOneAndUpdate({_id:_id},{$addToSet:{cultures:req.body.cultures}})
            }
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { Date: `${dayId.date} actualizado` }
            })
    }catch(err){
        return next(err)
    }
}

const deleteDay=async (req,res,next)=>{
    try {
        const {_id}=req.body;
        await Day.deleteOne({_id:_id})
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { Day: `${_id} borrado` }
        })
    } catch (error) {
        return next(error)
    }
}

//metodos relacionados con el usuario

const getDaysFromUser= async (req, res,next)=>{
    try{
        const {email}=req.headers;
        const days= await User.findOne({email:email},{itinerary:1,_id:0}).populate({path:"itinerary",populate:[{path:"discos"},{path:"restaurants"},{path:"cultures"}]})
        console.log(days)
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { days : days }
        });

    }catch(err){
        return next(err)
    }
}
const addDayToUser= async(req, res,next)=>{
    try{
        const {email}=req.headers;
        const day = new Day({
            date:req.body.date,
            discos:req.body.discos,
            cultures:req.body.cultures,
            restaurants:req.body.restaurants
        })
        await day.save()
        await User.findOneAndUpdate({email:email},{$addToSet:{itinerary:day}})
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { day : day }
        });
    }catch(err){
        return next(err)
    }
}
const deleteDayFromUser= async(req, res,next)=>{
    try{
        const {email}=req.headers;
        const {_id}=req.body;
        await User.findOneAndUpdate({email:email},{$pull:{"itinerary":_id}}) 
        deleteDay(req,res,next)
    }catch(err){
        return next(err)
    }
}
module.exports = { createDay, getAllDays, getDayByDate,updateDay,deleteDay,getDaysFromUser ,addDayToUser, deleteDayFromUser }




