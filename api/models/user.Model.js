const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
   // _id: mongoose.Schema.Types.ObjectId,
    hoTen: {Type : String , require:true},
    soDienThoai: { Type : String , require: true},
    email: {Type : String , require: true},
    gioiTinh: {Type : String, require : true},
    DiaChi:{Type :String , require :true},
})

module.exports = mongoose.model('User',userSchema);