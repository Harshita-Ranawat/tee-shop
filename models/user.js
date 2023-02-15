const mongoose = require('mongoose');
const userschema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username Cannot be blank']
  },
  password: {
    type: String,
    required: [true, 'Password cannot be blank']
  }
})

module.exports = mongoose.model('User', userschema);