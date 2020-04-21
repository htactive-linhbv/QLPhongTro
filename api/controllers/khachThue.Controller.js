const KhachThues = require('../models/khachThue.Model');



module.exports = {
    postImage : ((req,res)=>{
        
        //console.log(req.files);
        console.log(req.files.anhDaiDien);
        console.log(req.body.tenKhachThue);
        
        res.status(200).json({mesage:"messsage"})
        
    }),

    get: ((req, res) => {
        const chuTro_id = req.chuTro.chuTro_id;
        KhachThues.find({ chuTro_id: chuTro_id }).then(response => {
            res.status(200).json({ data: response })
        }).catch(err => {
            res.status(400).json(err)
        })
    }),
    getChiTiet: ((req, res) => {
        const id = req.params.id;
        KhachThues.findById(id).then(response => {
            res.status.json({ data: response });
        }).catch(err => {
            res.status(400).json(err)
        })
    }),
    create() {
        const khachThue = new KhachThues({
            _id: mongoose.Types.ObjectId,
            chuTro_id: req.chuTro.chuTro_id,
            tenKhachThue: req.body.tenKhachThue,
            sdtKhachThue:req.body.sdtKhachThue ,
            ngaySinh: req.body.ngaySinh,
            soCMND: req.body.soCMND,
            ngayCapCMND: req.body.ngayCapCMND,
            noiCapCMND: req.body.noiCapCMND,
            ngheNghiep: req.body.ngheNghiep,
            gioiTinh: req.body.gioiTinh,
            hoKhau: req.body.hoKhau,
            noiCongTac: req.body.noiCongTac,
            hoTenBoMe: req.body.hoTenBoMe,
            sdtBoMe: req.body.sdtBoMe,
            ghiChu: req.body.ghiChu,
            anhDaiDien: req.files,
            anhCMNDTruoc: { type: String },
            anhCMNDSau: { type: String },
        })
        khachThue.save().then(response=>{
            console.log(response);
            
        })
    }
}