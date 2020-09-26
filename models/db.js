const mongoose =require('mongoose');
require('../config/config');
require('./user.model');
// const autoIncrement = require('mongoose-auto-increment');

// mongoose.Promise = global.Promise;

 mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
var connection=mongoose.connect(process.env.MONGODB_URI,(err)=>
 {
    if(err){
      console.log('error in db creation:'+JSON.stringify(err,undefined,2));

            }
            else{
               console.log('db created succesfully');
            }
 
    
     
 });
 
 module.export={
    connection:connection
 }