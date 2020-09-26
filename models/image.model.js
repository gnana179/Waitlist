const mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({

    _id:{
      type:String
    },
    
    avatar: {
      type: String
    },
  }, {
      collection: 'images'
    })


    module.exports = new mongoose.model('Image', imageSchema); 
