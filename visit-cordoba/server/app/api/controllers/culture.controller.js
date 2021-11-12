const Culture= require("../models/culture.model");
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");

const createCulture= async (req, res, next) => {
    try {
        const newCulture = new Culture ();
        newCulture.name= req.body.name;
        newCulture.image= req.body.image;
        newCulture.adress= req.body.adress;
        newCulture.hour= req.body.hour;
        const CultureDb= await newCulture.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { culture: CultureDb.name }
        })

    } catch (error) {
        return next(error);  
    }
}

const getAllCultures = async (req, res, next) => {
    try {
            const culture = await Culture.find();
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { culture: culture }
            });
        }catch (error) {
        return next(error)
    }
}

const getCultureById = async (req, res, next) => {
    try {
        const { cultureId } = req.params;
        const cultureById = await Culture.findById(cultureId);
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { Culture: cultureById }
        })
    } catch (error) {
        return next(error)
    }
}

module.exports = { createCulture, getAllCultures, getCultureById };
