const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
  //  _id: mongoose.Schema.Types.ObjectId,
    hoTen: String,
    email: String,
    password: String,
})

module.exports = mongoose.model('Admin', adminSchema);