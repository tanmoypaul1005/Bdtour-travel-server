const TourPackage = require("../Models/TourPackage");

//Get Tour Package
module.exports.getTourPackage=(req,res)=>{
    TourPackage.find({})
    .exec((error,data)=>{
      if(error) return res.status(201).json({success:"false",error})
  
      if(data){
        return res.status(200).json({data,success:"true"})
      }
    })
  }

//Add Tour Package
module.exports.addTourPackage=(req,res,next)=>{
    const{ title,role,description,short_description,package_startDate,package_endDate,place,price,image,room_type,hotel_name}=req.body; 

    TourPackage.findOne({title:title})
    .exec((error,data)=>{
    //  if(data){return next(new ErrorHander("Tour Package All Ready Register", 500));}
     const _tourPackage=new TourPackage({
        title,role,image,description,
        short_description,package_startDate,
        package_endDate,place,price,image,room_type,hotel_name
    });
     _tourPackage.save((error,data)=>{
      if(error){return res.status(505).json({success:"false",error});}
      if(data){return res.status(201).json({msg:'Tour Package Create Successfully',data })}
     });
    });
  }

//Delete Tour Package
module.exports.deleteTourPackage=(req,res)=>{
    TourPackage.findOneAndDelete({_id:req.body.id})
    .exec((error,data)=>{
        if(error){return res.status(400).json({success:"false",error})}
        if(data){return res.status(200).json({msg:'TourPackage is Delete',data,success:"true"})}
    })
  }

//Tour Package Details
module.exports.getTourPackageDetails=(req,res)=>{

    TourPackage.findOne({id:req.params.tourPackageId})
    .exec((error,data)=>{
      if(error) return res.status(201).json({success:"false",error})
  
      if(data){
        return res.status(200).json({data,success:"true"})
      }
    })
  }
  


