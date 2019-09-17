const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Restaurant = require('../models/restaurant');
const auto = require('../models/auto');





      
       
router.post("/addrest", (req, res, next) => {
    auto.findOneAndUpdate({ _id: "RestID" }, { $inc: { sequence_value: 1 } }, { new: true }, (err, response) => {
        const result = response.sequence_value
    let newDisOrd = new Restaurant({
        rest_id:result,
        rest_name: req.body.rest_name,
        rest_city: req.body.rest_city,
        rest_state: req.body.rest_state,
    
    });

    Restaurant.addrestaurant(newDisOrd, (err, newDisOrd) => {
        
        if (err) {
            // console.log(err)
            res.json({ success: false, msg: 'failed to add Restaurant' });
        }
        else {
            res.json({ success: true, msg: ' add Restaurant ' });
        }
    })

});

}),

 router.post("/updaterestaurant", (req, res, next) => {
    let newDisOrd ={
        rest_id: req.body.rest_id,
        rest_name: req.body.rest_name,
        rest_city: req.body.rest_city,
        rest_state: req.body.rest_state,
    };

    Restaurant.UpdateRestaurant(newDisOrd, (err, newDisOrd) => {
        
        if (err) {
            res.json({ success: false, msg: 'failed to Update restaurant' });
        }
        else {
            res.json({ success: true, msg: ' Update restaurant ' });
        }
    })

 });



 
router.get("/getrestaurantlist/:page", (req, res, next) => {

    Restaurant.getRestaurantList(req.params.page, (err, response) => {

        if (err) {
            res.json({ success: false, msg: ' not found' });
        }
        else {
            res.json(response);

        }
    });
});

module.exports = router;

