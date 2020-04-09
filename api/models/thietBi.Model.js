const mongoose = require('mongoose');

const thietBiSchema = mongoose.Schema({
   // _id : mongoose.Schema.Types.ObjectId,
    tenThietBi : {Type:String , require:true},
    gia: {Type: String , require: true},
    moTa: String,
})

module.exports = mongoose.model('ThietBi',thietBiSchema);