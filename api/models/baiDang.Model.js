const mongoose = require('mongoose');

const baiDangSchema = mongoose.Schema({
    _id :mongoose.Schema.Types.ObjectId,
    chuTro_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ChuTro' },
    tieuDe : {type : String , require: true},
    khuTro_id: { type: mongoose.Schema.Types.ObjectId, ref: 'KhuTro' },
    phongTro_id: {type: mongoose.Schema.Types.ObjectId, ref: 'PhongTro'},
    moTa : String,
    ngayDang:{type: String},
    trangThai :{type: Boolean , default:true},
    images:[{type:String}]
})

module.exports = mongoose.model('BaiDang',baiDangSchema);
