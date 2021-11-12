const Restaurant= require("../models/restaurant.model");
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");

const createRestaurant= async (req, res, next) => {
    try {
        const newRestaurant = new Restaurant ();
        newRestaurant.name= req.body.name;
        newRestaurant.image= req.body.image;
        newRestaurant.adress= req.body.adress;
        newRestaurant.hour= req.body.hour;
        const RestaurantDb= await newRestaurant.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { restaurant: RestaurantDb.name }
        })

    } catch (error) {
        return next(error);  
    }
}

const getAllRestaurants = async (req, res, next) => {
    try {
            const restaurant = await Restaurant.find();
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { restaurant: restaurant }
            });
        }catch (error) {
        return next(error)
    }
}

const getRestaurantById = async (req, res, next) => {
    try {
        const { restaurantId } = req.params;
        const restaurantById = await Restaurant.findById(restaurantId);
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { Restaurant: restaurantById }
        })
    } catch (error) {
        return next(error)
    }
}

module.exports = { createRestaurant, getAllRestaurants, getRestaurantById };