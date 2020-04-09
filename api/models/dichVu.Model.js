const mongoose = require('mongoose');

const dichVuSchema = mongoose.Schema({
    tenDV: {Type:String,require:true},
    moTaDV: String,
    donGia :{Type : Number, require: true},
    donVi : {Type : Number, require: true},
    quyTacTinhTien :{Type: String , require: true},
    trangThai : {Type: Boolean , default : false},
})
module.exports = mongoose.model('DichVu',dichVuSchema);