const mongoose = require('mongoose');

const phongTroSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    tenPhongTro: { Type: String, required: true },
    slNguoiToiDa: { Type: Number, required: true },
    dienTich: { Type: Number, required: true },
    Tang: Number,
    gacLung: { Type: Boolean, default: false },
    giaPhong: { Type: Number, required: true },
    moTa: String,
    dichVu_ids: [{ Type: mongoose.Schema.Types.ObjectId, ref: 'DichVu' }],
    tinhTrangPhong: { Type: Boolean, default: false },
    ngayBatDau: { Type: Date, required: true },
    NgayHetHan: { Type: Date, required: true },
    tienCoc: Number,
    khachThue_ids: [{ Type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    thietBi_ids: [{ Type: mongoose.Schema.Types.ObjectId, ref: "ThietBi" }],
    hoaDon_ids: [{ Type: mongoose.Schema.Types.ObjectId, ref: "HoaDon" }],
    images: [{ image: String }],
    
})

module.exports = mongoose.model('PhongTro', phongTroSchema);