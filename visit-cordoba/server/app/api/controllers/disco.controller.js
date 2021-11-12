const Disco= require("../models/disco.model");
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");

const createDisco= async (req, res, next) => {
    try {
        const newDisco = new Disco ();
        newDisco.name= req.body.name;
        newDisco.image= req.body.image;
        newDisco.adress= req.body.adress;
        newDisco.hour= req.body.hour;
        const DiscoDb= await newDisco.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { disco: DiscoDb.name }
        })

    } catch (error) {
        return next(error);  
    }
}

const getAllDiscos = async (req, res, next) => {
    try {
            const disco = await Disco.find();
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { disco: disco }
            });
        }catch (error) {
        return next(error)
    }
}

const getDiscoById = async (req, res, next) => {
    try {
        const { discoId } = req.params;
        const discoById = await Disco.findById(discoId);
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { Disco: discoById }
        })
    } catch (error) {
        return next(error)
    }
}

module.exports = { createDisco, getAllDiscos, getDiscoById };
