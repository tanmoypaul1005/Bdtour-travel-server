const Booking = require("../Models/Booking");
const ErrorHander = require("../utils/ErrorHander");


module.exports.addBooking=(req,res,next)=>{

  const{ name,email,tourPackageId,room_type,address,phone}=req.body; 

  Booking.findOne({email:email ,tourPackageId:tourPackageId})
  .exec((error,data)=>{
   if(data){return next(new ErrorHander("Your All Ready Booking this Package", 500));}

   const _booking=new Booking({name,email,tourPackageId,room_type,address,phone});
   _booking.save((error,data)=>{
    if(error){return res.status(500).json({error,success:"false"});}
    if(data){return res.status(200).json({msg:'Your Booking Successfully Add',data,success:"true" })}
   });
  });
}


module.exports.getBooking=(req,res)=>{
    Booking.find({})
    .exec((error,data)=>{
      if(error) return res.status(500).json({success:"false",error})
      if(data){
        return res.status(200).json({data,success:"true"})
      }
    })
  }