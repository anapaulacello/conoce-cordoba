const Day = require("../models/day.model");
const Restaurant= require("../models/restaurant.model")
const Disco= require("../models/disco.model")

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
        const date=req.body.date;
        const dayDate = await Day.findOne({date:date});
        if(dayDate){
            if(req.body.discos){
                await Day.findOneAndUpdate({date:date},{$addToSet:{discos:req.body.discos}});
            }
            if(req.body.restaurants){
                await Day.findOneAndUpdate({date:date},{$addToSet:{restaurants:req.body.restaurants}});
            }
            if(req.body.cultures){
                await Day.findOneAndUpdate({date:date},{$addToSet:{cultures:req.body.cultures}})
            }
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { Date: `${dayDate.date} actualizado` }
            })
        }else{
            createDay(req,res,next)
        }
    }catch(err){
        return next(err)
    }
}

module.exports = { createDay, getAllDays, getDayByDate,updateDay }

//TODO updateDay


/* const email= req.headers.email
const searchEmail=await User.findOne({email:email}).populate("itinerary")
if(searchEmail.itinerary.length==0){
    if(req.body.type=="Restaurant"){
       
        const idRestaurants=req.body._id
        console.log(typeof idRestaurants)
        for (let index = 0; index < idRestaurants.length; index++)  {
           const user= await User.findOneAndUpdate({email:email},{$addToSet:{itinerary:index}})
        };
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { searchEmail: searchEmail }
        })
    }
} */