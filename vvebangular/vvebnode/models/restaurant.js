const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const RestaurantSchema = mongoose.Schema({
    rest_id:{ 
        type:String
    },
    rest_name:{
        type:String,
    },
    rest_city:{
        type:String,
        
    },
    rest_state:{
        type:String,
    },
    

});



const Restaurant = module.exports = mongoose.model('Restaurant',RestaurantSchema);

module.exports.UpdateRestaurant= function(asndoc, callback){

    Restaurant.updateOne({rest_id:asndoc.rest_id},
        {
            $set:
            {
                "rest_name": asndoc.rest_name,
                "rest_city":asndoc.rest_city,
                "rest_state":asndoc.rest_state
            }
        },
     callback)}  

     module.exports.getRestaurantList = function (pagno, callback) {
        // const query = { p_id: id }
        Restaurant.find(callback).skip(2 * (pagno)).limit(2).sort({ $natural: -1 });
    }



module.exports.addrestaurant = function(Restaurant1,callback){
    // console.log(Asndocmst)
    Restaurant1.save(callback)  
}




