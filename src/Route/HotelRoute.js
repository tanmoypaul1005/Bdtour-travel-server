const app = require("express");
const { addHotel, getHotel, deleteHotel } = require("../Controller/HotelController");
const router = app.Router();

router.post("hotel/add",addHotel),
router.post("hotel/get",getHotel),
router.post("hotel/delete",deleteHotel),


module.exports=router;
