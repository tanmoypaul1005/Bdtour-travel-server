const app = require("express");
const { addHotel, getHotel } = require("../Controller/HotelController");
const router = app.Router();

router.post("hotel/add",addHotel),
router.post("hotel/get",getHotel),


module.exports=router;
