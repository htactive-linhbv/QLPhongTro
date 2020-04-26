const mongoose = require('mongoose');

const hopDongSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    chuTro_id:{Type: Schema.ObjectId, ref: "ChuTro"},
    tenHopDong: { Type: String, require: true },
    loaiHopDong:{Type: String , require: true},
    khachThue_id: { Type: Schema.ObjectId, ref: "KhachThue" },
    khuTro_id:{ Type: Schema.ObjectId, ref: "KhuTro" },
    phongTro_id: { Type: Schema.ObjectId, ref: "PhongTro" },
    thoiHan:{Type: String},
    ngayBatDau:{Type:Date},
    NgayKetThuc:{Type:Date},
    tienCoc: { Type: Number, require: true },
    noiDung: String,
})

module.exports = mongoose.model("HopDong", hopDongSchema);