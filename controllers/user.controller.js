const mongoose = require('mongoose');
const passport = require('passport');
const User = mongoose.model('User');
let referralCodeGenerator = require('referral-code-generator');
const fs=require('fs');
const _ = require('lodash');


module.exports.register = (req, res, next) => {
    var ref=referralCodeGenerator.custom('lowercase',5,6,req.body.email);
    console.log(ref);
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.password = req.body.password;
   user.avatar="http://localhost:3000/public/user.png";
   user.ref=ref;
   user.frndref=req.body.frndref;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            //error handling
user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }
    });


        }

    });
    User.findOneAndUpdate({ref:req.body.frndref},{$inc:{position:-1}}, function (err, docs) { 
        if (err){ 
            console.log(err) 
        } 
        else{ 
            console.log("Updated User : ", docs); 
        } 
    });
    
}


//authentication 
module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {
        // error from passport middleware
        if (err) return res.status(404).json(err);
        // registered user
        if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(401).json(info);
    })(req, res);
}

module.exports.userProfile = (req, res, next) =>{

    User.findOne({ _id: req._id },
        (err,user) => {
            if (user)
            return res.status(200).json({ status: true,user: _.pick(user,['fullName','email','avatar','ref']) });
                
            else
            return res.status(404).json({ status: false, message: 'User record not found.' });
                
        }
    );
}


module.exports.userupdate=function (req, res){

    
    const url = req.protocol + '://' + req.get('host')
    
    avatar= url + '/public/' + req.file.filename
    User.findByIdAndUpdate({_id:req._id},{avatar:avatar}, function (err, docs) { 
        if (err){ 
            console.log(err) 
        } 
        else{ 
            console.log("Updated User : ", docs); 
        } 
    });
    }
//     module.exports.position=function (req, res){
// User.findOneAndUpdate({ref:req.body.frndref}, { position:this.position-1}, function( err, result) {
//             if (err) {
//               res.send(err);
//             } else {
//               res.send(result);
//             }
//           });
//         }
    
    
    module.exports.getall=function(req,res) {
             User.find().then(data => {
               res.status(200).json({
                 message: "Users retrieved successfully!",
                 users: data
               });
             });
            }