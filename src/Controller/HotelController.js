
const Hotel = require("../Models/Hotel");
//Add Hotel
module.exports.addHotel = (req, res) => {

    const { hotel_name, location, zila, numbed, room_type, hotel_rating } = req.body;

    Hotel.findOne({ title: title })
        .exec((error, data) => {
            const _hotel = new Hotel({ hotel_name, location, zila, numbed, room_type, hotel_rating });
            _hotel.save((error, data) => {
                if (error) { return res.status(505).json({ success: "false", error }); }
                if (data) { return res.status(201).json({ msg: 'Hotel Create Successfully', data }) }
            });
        });
}