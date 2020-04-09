const mongoose = require('mongoose');

const KhuTroSchema = mongoose.Schema({
   // _id: mongoose.Schema.Types.ObjectId,
    chuTro_id: { type: Schema.ObjectId, ref: "ChuTro" },
    diaChi: { Tinh: String, Quan: String, Duong: String },
    mota: String,
    soTang: Number,
    ngayNhapDienNuoc: Date,
    ngayXuatHoaDon: Date,
    phongTro_ids: [{ type: Schema.ObjectId, ref: "PhongTro" }],

})

module.exports = mongoose.model('KhuTro', KhuTroSchema);