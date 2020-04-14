const mongoose = require('mongoose');

const dichVuSchema = mongoose.Schema({
    tenDV: {Type:String,required:true},
    khuTro_id:{ type: Schema.ObjectId, ref: "KhuTro" },
    moTaDV: {Type: String},
    donGia :{Type : Number, required: true},
    donVi : {Type : Number, required: true},
    quyTacTinhTien :{Type: String , required: true},
    trangThai : {Type: Boolean , default : false},
})
module.exports = mongoose.model('DichVu',dichVuSchema);