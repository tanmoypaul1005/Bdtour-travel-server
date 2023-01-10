const app = require("express");
const { addHotel } = require("../Controller/HotelController");
const router = app.Router();

router.post("hotel/add",addHotel)

module.exports=router;
