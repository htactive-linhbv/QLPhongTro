const mongoose = require('mongoose');

const hopDongSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    tenHopDong: { Type: String, require: true },
    loaiHopDong:{Type: String , require: true},
    khachThue_id: { Type: Schema.ObjectId, ref: "KhachThue" },
    phongTro_id: { Type: Schema.ObjectId, ref: "PhongTro" },
    thoiHang:{Type: String},
    ngayBatDau:{Type:Date},
    NgayKetThuc:{Type:Date},
    soCMND: { Type: String, require: true },
    tienCoc: { Type: Number, require: true },
    noiDung: String,
})

module.exports = mongoose.model("HopDong", hopDongSchema);