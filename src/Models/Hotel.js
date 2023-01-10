const { default: mongoose } = require("mongoose");

const HotelSchema=new mongoose.Schema({

    hotel_name:{
        type:String,
        required:true,
        trim:true,
    },
    location:{
        type:String,
        required:true,
        trim:true,
    },
    zila:{
        type:String,
        required:true,
        trim:true,
    },
    numbed:{
        type:Number,
        required:true, 
    },
    room_type: {
        type: String,
        required: true,
      },

      hotel_rating:{
        type:Number,
        required:true,
      }
}, { timestamps: true })

module.exports = mongoose.model("Hotel",HotelSchema);