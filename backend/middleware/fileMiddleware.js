import multer from 'multer'
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname+file.originalname) 
      console.log(file.originalname,'aaa');
    }
  })
  let fileFilter = function (req, file, cb) {
    var allowedMimes = ['image/jpeg', 'image/pjpeg', 'image/png'];
    if (allowedMimes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb({
            success: false,
            message: 'Invalid file type. Only jpg, png image files are allowed.'
        }, false);
    }
};
  var upload = multer({ storage: storage,fileFilter:fileFilter,limits:{fileSize:200*1024*1024} })
export default  upload ;