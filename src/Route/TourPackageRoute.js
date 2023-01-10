const app = require("express");
const { addTourPackage, getTourPackage, deleteTourPackage, getTourPackageDetails, addRelatedPackages} = require("../Controller/TourPackageController");
const router = app.Router();

//Add Add Tour Package
router.post('/tour-package/add',addTourPackage);
router.get('/tour-package/get',getTourPackage);
router.post('/tour-package/delete',deleteTourPackage);
router.get('/tour-package/details/:tourPackageId',getTourPackageDetails);
router.get('/tour-package/related-package/add',addRelatedPackages);
module.exports = router;
