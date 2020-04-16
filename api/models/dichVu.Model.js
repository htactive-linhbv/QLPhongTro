const mongoose = require('mongoose');

const dichVuSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    tenDV: { type: String, required: true },
    khuTro_id: { type: mongoose.Schema.Types.ObjectId, ref: "KhuTro" },
    moTaDV: { type: String },
    donGia: { type: Number, required: true },
    donVi: { type: Number, required: true },
    quyTacTinhTien: { type: String, required: true },
    trangThai: { type: Boolean, default: false },
})
module.exports = mongoose.model('DichVu', dichVuSchema);