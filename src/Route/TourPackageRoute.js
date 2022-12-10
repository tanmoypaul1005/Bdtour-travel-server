const app = require("express");
const { addTourPackage, getTourPackage, deleteTourPackage} = require("../Controller/TourPackageController");
const router = app.Router();

//Add Add Tour Package
router.post('/tour_package/add',addTourPackage);
router.get('/tour_package/get',getTourPackage);
router.post('/tour_package/delete',deleteTourPackage);
module.exports = router;
