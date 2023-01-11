const TourPackage = require("../Models/TourPackage");

//Get Tour Package
module.exports.getTourPackage = (req, res) => {
  TourPackage.find({})
    .exec((error, data) => {
      if (error) return res.status(201).json({ success: "false", error })

      if (data) {
        return res.status(200).json({ data, success: "true" })
      }
    })
}

//Add Tour Package
module.exports.addTourPackage = (req, res, next) => {
  const { title, role, description, short_description, package_startDate, package_endDate, place, price, image, room_type, hotel_name } = req.body;

  TourPackage.findOne({ title: title })
    .exec((error, data) => {
      //  if(data){return next(new ErrorHander("Tour Package All Ready Register", 500));}
      const _tourPackage = new TourPackage({
        title, role, image, description,
        short_description, package_startDate,
        package_endDate, place, price, image, room_type, hotel_name
      });
      _tourPackage.save((error, data) => {
        if (error) { return res.status(505).json({ success: "false", error }); }
        if (data) { return res.status(201).json({ msg: 'Tour Package Create Successfully', data }) }
      });
    });
}

//Delete Tour Package
module.exports.deleteTourPackage = (req, res) => {
  TourPackage.findOneAndDelete({ _id: req.body.tourPackageId })
    .exec((error, data) => {
      if (error) { return res.status(400).json({ success: "false", error }) }
      if (data) { return res.status(200).json({ msg: 'TourPackage is Delete', data, success: "true" }) }
    })
}

//Tour Package Details
module.exports.getTourPackageDetails = (req, res) => {

  TourPackage.findOne({ id: req.params.tourPackageId })
    .exec((error, data) => {
      if (error) return res.status(201).json({ success: "false", error })

      if (data) {
        return res.status(200).json({ data, success: "true" })
      }
    })
}

// related Packages add
module.exports.addRelatedPackages = async (req, res) => {

  TourPackage.findOneAndUpdate({ _id: req.body.postId }, { $push: { related_package: { package: req.body.tourPackageId } } },

    function (error, data) {
      if (error) {
        res.status(500).json({ success: "false", error });
        console.log(error);
      } else {
        res.status(200).json({ msg: 'Your Related Package has been Add', success: "true", data });
        console.log({ msg: 'Your Related Package has been Add', success: "true" });
      }
    });
}

// Tour Package Review add
module.exports.addReviewTourPackage = (req, res) => {
  const { tourPackageId, comment, star, user } = req.body;
  const reviewsItem = { comment, star, user }
  TourPackage.findOneAndUpdate({ _id: tourPackageId },
    { $push: { reviews: reviewsItem } }, { new: true, upsert: true, setDefaultsOnInsert: true })
    .exec((error, data) => {
      if (error) { return res.status(500).json({ error,success: "false" }); }
      if (data) { 
        console.log(data)
        return res.status(200).json({ msg: 'Your Review Add successfully', data,success: "true" });
       }
    })
}



