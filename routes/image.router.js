//image upload
let express = require('express'),
  multer = require('multer'),
  mongoose = require('mongoose'),
  router = express.Router();
  const _ = require('lodash');
  const passport = require('passport');
  // Multer File upload settings
const DIR = './images/';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
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
});

const User = mongoose.model('User');

router.put('/update/:id', upload.single('avatar'), (req, res, next) => {
  const url = req.protocol + '://' + req.get('host')
  
    var avata=url + '/public/' + req.file.filename;
    console.log(avata);
   
    
   
  User.findOneAndUpdate({email:'jeevakarnan916@gmail.com'},{ avatar:avata}, (error, result) => {
    if (error) {
      console.log(error),
      console.log('hiii');
       res.status(500).json({
         error: err
      });
     
    } else {
      console.log(email);
      console.log('hiii');
      console.log(result);
          res.status(201).json({
            message: "User registered successfully!",
            
           })
    }
  })
})

// // User model
// let Image= require('../models/image-model');


// //POST User
 //router.post('/create-user', upload.single('avatar'), (req, res, next) => {
  
//   const url = req.protocol + '://' + req.get('host')
//   const user = new Image({
//     _id: new mongoose.Types.ObjectId(),
//     name: req.body.name,
//     avatar: url + '/public/' + req.file.filename
//   });
//   user.save().then(result => {
//     console.log(result);
//     res.status(201).json({
//       message: "User registered successfully!",
//       userCreated: {
//         _id: result._id,
//         name: result.name,
//         avatar: result.avatar
//       }
//     })
//   }).catch(err => {
//     console.log(err),
//       res.status(500).json({
//         error: err
//       });
//   })
// })



//GET All User
// router.get("/", (req, res, next) => {
//     User.find().then(data => {
//       res.status(200).json({
//         message: "Users retrieved successfully!",
//         users: data
//       });
//     });
//   });
  
  
  //GET User
  router.get('/userimage',function (req, res, next) {
 
    User.findOne({_id:req._id},
      (err, user) => {
        if (user)
        return res.status(200).json({ status: true, User : _.pick(user,['name','avatar']) });
            
        else
        return res.status(404).json({ status: false, message: 'User record not found.' });
            
    });

  })
    
    
  
// //   router.get('/user', function(req, res){
// //     var user_id = req.user.id;
// //     console.log(user_id);
// //   });
  
  module.exports = router;