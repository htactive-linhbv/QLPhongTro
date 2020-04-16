const mongoose = require('mongoose');

const baiDangSchema = mongoose.Schema({
    _id :mongoose.Schema.Types.ObjectId,
    tieuDe : {Type : String , require: true},
    phongTro_Id: {Type : Schema.ObjectId, require:true},
    moTa : String,
    TinhTrang :{Type: Boolean , default:false},

})

module.exports = mongoose.model('BaiDang',baiDangSchema);
