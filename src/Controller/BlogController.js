


//Add Tour Package
module.exports.addBlog=(req,res,next)=>{
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