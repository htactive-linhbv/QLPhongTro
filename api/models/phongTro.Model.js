const mongoose = require('mongoose');

const phongTroSchema = mongoose.Schema({
   // _id: mongoose.Schema.Types.ObjectId,
    tenPhongTro: { Type: String, require: true },
    slNguoiToiDa: { Type: Number, require: true },
    dienTich: { Type: Number, require: true },
    Tang: Number,
    gacLung: { Type: Boolean, default: false },
    giaPhong: { Type: Number, require: true },
    moTa: String,
    dichVu_ids: [{ Type: Schema.ObjectId, ref: 'DichVu' }],
    tinhTrangPhong: { Type: Boolean, default: false },
    ngayBatDau: { Type: Date, require: true },
    NgayHetHan: { Type: Date, require: true },
    tienCoc: Number,
    khachThue_ids: [{ Type: Schema.ObjectId, ref: "User" }],
    thietBi_ids: [{ Type: Schema.ObjectId, ref: "ThietBi" }],
    hoaDon_ids: [{ Type: Schema.ObjectId, ref: "HoaDon" }],
    images: [{ image: String }],
    
})

module.exports = mongoose.model('PhongTro', phongTroSchema);