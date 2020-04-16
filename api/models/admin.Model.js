const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  hoTen: { Type: String, required: true },
  email: { Type: String, required: true },
  password: { Type: String, required: true },
  quyen: { Type: String, required: true, default: 'admin' }

})

module.exports = mongoose.model('Admin', adminSchema);