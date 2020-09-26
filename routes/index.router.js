const express = require('express');
const router = express.Router();
const multer = require('multer');
const ctrlUser = require('../controllers/user.controller');
let referralCodeGenerator = require('referral-code-generator')
const jwtHelper = require('../config/jwtHelper');
const { Console } = require('console');


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/');
    },

    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, cb) {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, fileName)
    }
});

// Multer Mime Type Validation
var upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: (req, file, cb) => {
      if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
      }
    }
  }).single('avatar');

  
router.post('/register', ctrlUser.register);
router.post('/authenticate',ctrlUser.authenticate);
router.get('/userprofile',jwtHelper.verifyJwtToken,ctrlUser.userProfile);
router.post('/userupdate',upload,jwtHelper.verifyJwtToken,ctrlUser.userupdate);
router.get('/getall',ctrlUser.getall);
//router.post('/position',ctrlUser.position);
module.exports = router;