const multer = require('multer');



 const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
  }
});
  const fileFilter = (req,file ,cb)=>{
    if(file.mimetype==='image/png'||file.mimetype==='image/jpeg'  ){
      cb(null,true);
    }else{
      cb(null,false);
    }
  }
 
  const upload = multer({ storage: storage, fileFilter:fileFilter });

module.exports=upload;