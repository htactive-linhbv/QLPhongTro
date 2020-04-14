const mongoose = require('mongoose');

const chuTroSchema = mongoose.Schema({
   // _id: mongoose.Schema.Types.ObjectId,
    hoVaTen: { type: String, required: true },
    email: { type: String, required: true },
    soDienThoai: { type: String, required: true },
    password: { type: String, required: true },
    ngayDangKy: { type: Date, required: true },
    ngayHetHan: { type: Date, required: true },

})

module.exports = mongoose.model('ChuTro', chuTroSchema);