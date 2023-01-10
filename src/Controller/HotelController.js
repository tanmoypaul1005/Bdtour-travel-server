
const Hotel = require("../Models/Hotel");
//Add Hotel
module.exports.addHotel=(req,res)=>{
    const{ title,role,description,short_description,package_startDate,package_endDate,place,price,image,room_type,hotel_name}=req.body; 

    Hotel.findOne({title:title})
    .exec((error,data)=>{

     const _tourPackage=new Hotel({
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