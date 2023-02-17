const mongoose = require('mongoose');
const contactschema = new mongoose.Schema({
 
 txtPhone: {
    type: String,
   
  },
 


})

module.exports = mongoose.model('Contact', contactschema);