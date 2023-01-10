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
    noofbed:{
        type:Number,
        required:true,
        trim:true, 
    }

}, { timestamps: true })

module.exports("Hotel",HotelSchema)