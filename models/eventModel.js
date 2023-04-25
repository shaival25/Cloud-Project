const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
       eventName:{
           type:String,
           required:true,   
       }, 
       eventDate:{
              type:String,
              required:true,
              
          }, 
       clubName:{
              type:String, 
          }, 
       venue: {
              type:String,
              required:true,   
          }, 
       expectedAudience:{
              type:Number,
              default:0,
              required:true,   
          }, 
       cordinatorName:{
              type:String,
              required:true,   
          }, 
       cordinatorNo:{
              type:Number,
              required:true,   
          },
          id:{
            type:Number,
            required:true,
          },
          eventstatus:{
            type:"string",
            required:true,
          }
       
});

const eventModel = mongoose.model('Events',eventSchema);

module.exports = eventModel;