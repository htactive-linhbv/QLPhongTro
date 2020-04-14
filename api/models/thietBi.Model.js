const mongoose = require('mongoose');

const thietBiSchema = mongoose.Schema({
    // _id : mongoose.Schema.Types.ObjectId,
    tenThietBi: { Type: String, required: true },
    gia: { Type: String, required: true },
    khuTro_id:{ type: Schema.ObjectId, ref: "KhuTro" },
    moTa: { Type: String },
})

module.exports = mongoose.model('ThietBi', thietBiSchema);