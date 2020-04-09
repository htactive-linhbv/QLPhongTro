const mongoose = require('mongoose');

const hopDongSchema = mongoose.Schema({
    tenHopDong: { Type: String, require: true },
    user_id: { Type: Schema.ObjectId, ref: "User" },
    phongTro_id: { Type: Schema.ObjectId, ref: "PhongTro" },
    soCMND: { Type: String, require: true },
    ngheNghiep: { Type: String, require: true },
    tienCoc: { Type: Number, require: true },
    noiDung: String,
})

module.exports = mongoose.model("HopDong", hopDongSchema);