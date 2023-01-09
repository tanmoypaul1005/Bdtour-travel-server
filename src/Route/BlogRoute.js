const app=require('express');
const router=app.Router();

router.post("/blog/add",addBooking);
router.get("/blog/get",getBooking);

module.exports = router