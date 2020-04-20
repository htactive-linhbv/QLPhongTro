const HopDongs = require('../models/hopDong.Model')


module.exports={
    getAll:((req,res)=>{
        HopDongs.find().then(response=>{
            res.status(200).json({data:response})
        }).catch(err=>{
            res.status(400).json(err)
        })
    }),
    getId:((req,res)=>{
        const id = req.params.id;
        HopDongs.findById(id).then(response=>{
            res.status(200).json({data:response})
        }).catch(err=>{
            res.status(400).json(err)
        })
    }),
    create:((req,res)=>{
        const hopDong = new HopDongs({
            _id: new mongoose.Types.ObjectId(),
            tenHopDong: { Type: String, require: true },
    loaiHopDong:{Type: String , require: true},
    user_id: { Type: Schema.ObjectId, ref: "User" },
    phongTro_id: { Type: Schema.ObjectId, ref: "PhongTro" },
    thoiHang:{Type: String},
    ngayBatDau:{Type:Date},
    NgayKetThuc:{Type:Date},
    soCMND: { Type: String, require: true },
    tienCoc: { Type: Number, require: true },
    noiDung: String,
        })
    })
}