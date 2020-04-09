const mongoose = require('mongoose');

const chuTroSchema = mongoose.Schema({
   // _id: mongoose.Schema.Types.ObjectId,
    hoVaTen: { type: String, require: true },
    email: { type: String, require: true },
    soDienThoai: { type: String, require: true },
    password: { type: String, require: true },
    ngayDangKy: { type: Date, require: true },
    ngayHetHang: { type: Date, require: true },


})

module.exports = mongoose.model('ChuTro', chuTroSchema);