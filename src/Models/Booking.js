const { default: mongoose } = require("mongoose");

const BookingSchema = new mongoose.Schema({

    name: {
        required: true,
        type: String,
        max: 50,
        min: 3
    },

    packageID: { type: mongoose.Schema.Types.ObjectId, ref: "TourPackage", required: true },

    email: {
        required: true,
        type: String,
        required: true,
    },

    address: {
        required: true,
        type: String,
        required: true,
        max: 255
    },

    phone: {
        required: true,
        type: Number,
        required: true,
        
    },
    room_type: {
        type: String,
        required: true,
    },

},

    {
        timestamps: true
    }
);

module.exports = mongoose.model("Booking", BookingSchema)