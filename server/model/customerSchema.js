const mongoose = require('mongoose');
const moment = require('moment-timezone');

mongoose.connect('mongodb://127.0.0.1:27017/customerData').then(() => {
  console.log('connection ready: ' + mongoose.connection.readyState);
}).catch(error => {
  // Handle connection error
});

const customerSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  confirmPassword: String,
  country: String,
  state: String,
  city: String,
  languages: Array,
  modifiedDate: {
    type: Date, 
    default: Date.now
  },
  isChecked: Boolean
});

module.exports.Customer = mongoose.model('Customer', customerSchema);

