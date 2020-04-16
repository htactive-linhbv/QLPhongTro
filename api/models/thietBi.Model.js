const mongoose = require('mongoose');

const thietBiSchema = mongoose.Schema({
    // _id : mongoose.Schema.Types.ObjectId,
    tenThietBi: { Type: String, required: true },
    gia: { Type: String, required: true },
    chuTro_id:{ type: Schema.ObjectId, ref: "ChuTro" },
    moTa: { Type: String },
})

module.exports = mongoose.model('ThietBi', thietBiSchema);