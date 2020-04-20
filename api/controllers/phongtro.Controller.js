const PhongTros = require('../models/phongTro.Model');
const mongoose = require('mongoose');

module.exports = {
    getAll: ((req, res) => {
        const chuTro_id = req.chuTro.chuTro_id;
        PhongTros.find({ chuTro_id: chuTro_id }).then(response => {
            res.status(200).json({ data: response })
        }).catch(err => {
            res.status(400).json(err)
        })
    }),

    getId: ((req, res) => {
        const id = req.params.id;
        PhongTros.find().then(response => {
            res.status(200).json({ data: response })
        }).catch(err => {
            res.status(400).json(err)
        })
    }),
    create() {
        const phong = new PhongTros({
            _id: mongoose.Types.ObjectId,
            tenPhongTro: req.body.tenPhongTro,
            slNguoiToiDa: Number(req.body.slNguoiToiDa),
            dienTich: req.body.dienTich,
            Tang: Number(req.body.Tang),
            gacLung: Boolean(req.body.gacLung),
            giaPhong:  Number(req.body.giaPhong),
            moTa: req.body.moTa,
            tinhTrangPhong: Boolean(req.body.tinhTrangPhong),
            khachThue_ids:  req.body.khachThue_ids,
            images: [{ image: String }],
        })
        phong.save().then(response=>{
            res.status(200).json({data:data})
        }).catch(err=>{
            res.status(400).json(err)
        })
    },
    update:((req,res)=>{
        const id = req.params.id;
        PhongTros.findByIdAndUpdate(id,{
            _id: mongoose.Types.ObjectId,
            tenPhongTro: req.body.tenPhongTro,
            slNguoiToiDa: Number(req.body.slNguoiToiDa),
            dienTich: req.body.dienTich,
            Tang: Number(req.body.Tang),
            gacLung: Boolean(req.body.gacLung),
            giaPhong:  Number(req.body.giaPhong),
            moTa: req.body.moTa,
            tinhTrangPhong: Boolean(req.body.tinhTrangPhong),
            khachThue_ids:  req.body.khachThue_ids,
            images: [{ image: String }],
        })
    })

}
