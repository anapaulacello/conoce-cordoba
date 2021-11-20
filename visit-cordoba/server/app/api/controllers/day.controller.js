const Day = require("../models/day.model");
const User=require("../models/user.model")

const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");

const createDay = async (req, res, next) => {
    try {

        const newDay = new Day();
        newDay.date = req.body.date;
        newDay.actions = req.body.actions;
        const DayDb= await newDay.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { Date:DayDb}
        })

    } catch (error) {
        return next(error);
    }
}

const getAllDays = async (req, res, next) => {
    try {
        const day = await Day.find().populate("actions")
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
        const dayDate = await Day.findOne({date:date}).populate("actions")
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
        const date=await Day.findOneAndUpdate({_id:_id},{actions:req.body.actions, date:req.body.date})
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { Date: `${date.date} actualizado` }
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
        const days= await User.findOne({email:email},{itinerary:1,_id:0}).populate({path:"itinerary"})
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
        const dayDate=await User.findOne({email:email},{itinerary:1,_id:0}).populate("itinerary")
        console.log(dayDate)
        let created=false;
        dayDate.itinerary.map((element)=>{
            if(element.date==req.body.date){
                created=true;
            }
        })
        if(created){
            return res.json({
                status:500,
                message:"esta fecha ya esta seleccionada"
            })
        }
        else{
            const day = new Day({
                date:req.body.date,
                actions:req.body.actions
                
            })
            await day.save()
            await User.findOneAndUpdate({email:email},{$addToSet:{itinerary:day}})
            
            return res.json({
                status: 201,
                message: HTTPSTATUSCODE[201],
                data: { day : day }
            });
        }

        
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
module.exports = { createDay,getAllDays,getDayByDate,deleteDay,updateDay,getDaysFromUser,addDayToUser,deleteDayFromUser}




 