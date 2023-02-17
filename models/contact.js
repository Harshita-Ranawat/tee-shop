const mongoose = require('mongoose');
const contactschema = new mongoose.Schema({
 
 txtPhone: {
    type: String,
   
  },
  txtMsg:
  {
    type:String,
  }
 


})

module.exports = mongoose.model('Contact', contactschema);