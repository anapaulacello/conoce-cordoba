const Action= require("../models/action.model");
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");
const Day = require("../models/day.model");

const createAction= async (req, res, next) => {
    try {
        const date = await Action.findOne(req.body.date);

/*         if(req.body.date==date){
            return res.json({
                status:500,
                message:"esta fecha ya esta seleccionada"
            })
        }else{ */
            const newAction = new Action ();
            newAction.name= req.body.name;
            newAction.image= req.body.image;
            newAction.adress= req.body.adress;
            newAction.hour= req.body.hour;
            newAction.actionEnum=req.body.actionEnum;
            const ActionDb= await newAction.save();
            return res.json({
                status: 201,
                message: HTTPSTATUSCODE[201],
                data: { action: ActionDb.name }
            })
        //}


    } catch (error) {
        return next(error);  
    }
}

const getAllAction = async (req, res, next) => {
    try {
            const action = await Action.find();
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { action: action }
            });
        }catch (error) {
        return next(error)
    }
}

const getActionById = async (req, res, next) => {
    try {
        const { actionId} = req.params;
        const actionById = await Action.findById(actionId);
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { Action: actionById }
        })
    } catch (error) {
        return next(error)
    }
}


const getActionByName=async (req,res,next)=>{
    try {
        const {actionName}=req.params;
        console.log(req.params)
        const actionByName=await Action.findOne({actionEnum:actionName})
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { Action: actionByName }
        })
    } catch (error) {
        return next(error)
    }
}
module.exports = { createAction,getAllAction,getActionById,getActionByName};