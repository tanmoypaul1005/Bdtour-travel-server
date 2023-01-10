const { default: mongoose } = require("mongoose");

const HotelSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true,
    },
    
}, { timestamps: true })

module.exports("Hotel",HotelSchema)