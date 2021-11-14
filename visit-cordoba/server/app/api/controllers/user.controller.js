const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");
const Day=require("../models/day.model");
const register = async (req, res, next) => {
    try {
        const newUser = new User();
        newUser.name = req.body.name;
        newUser.email = req.body.email;
        newUser.password = req.body.password;

        const userDb = await newUser.save();

        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: userDb.name
        });
    } catch (error) {
        return next(error);
    }
}

const login = async (req, res, next) => {
    try {
        const userInfo = await User.findOne({ email: req.body.email });
        if (bcrypt.compareSync(req.body.password, userInfo.password)) {
            userInfo.password = null;
            const token = jwt.sign(
                {
                    id: userInfo._id,
                    name: userInfo.name
                },

                req.app.get("secretKey"), { expiresIn: "1h" }
            );
            return res.json({
                status: 201,
                message: HTTPSTATUSCODE[201],
                data: { user: userInfo.name, token: token }
            });
        } else {
            return res.json({
                status: 401,
                message: HTTPSTATUSCODE[401],
                data: {}
            })
        }
    } catch (error) {
        return next(error);
    }
}

const logout = (req, res, next) => {
    try {
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            token: null
        })
    } catch (error) {
        return next(error);
    }
}
const getDaysFromUser= async (req, res,next)=>{
    try{
        const {email}=req.headers;
        /* console.log(req.params)  */
        const days= await User.findOne({email:email},{itinerary:1,_id:0}).populate({path:"itinerary",populate:[{path:"discos"},{path:"restaurants"},{path:"cultures"}]})
        // el res es solo de los dias nada mas
        /* console.log(days)  */
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
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { Day: `${_id} borrado` }
        })
    }catch(err){
        return next(err)
    }
}

const updateDayFromUser= async(req, res,next)=>{
    try{

    }catch(err){
        return next(err)
    }
}
module.exports = { register, login, logout, getDaysFromUser ,addDayToUser, deleteDayFromUser}; 