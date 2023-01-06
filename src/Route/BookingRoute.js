
const app=require('express');
const { addBooking, getBooking } = require('../Controller/BookingController');
const router=app.Router()

router.post("/booking/add",addBooking);
router.get("/booking/get",getBooking);

module.exports = router