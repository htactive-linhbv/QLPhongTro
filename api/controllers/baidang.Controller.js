const BaiDangs = require('../models/baiDang.Model');
const mongoose = require('mongoose');

module.exports = {
    getAll: ((req, res) => {
        const chuTro_id = req.chuTro._id;
        BaiDangs.find({ chuTro_id: chuTro_id }).populate([
            { path: 'khuTro_id' },
            { path: 'phongTro_id' },

        ]).then(response => {
            res.status(200).json({ data: response })
        }).catch(err => {
            res.status(400).json(err)
        })
    }),
    getId: ((req, res) => {
        const id = req.params.id;
        BaiDangs.findById(id).populate([
            { path: 'khuTro_id' },
            { path: 'phongTro_id' },

        ]).then(response => {
            res.status(200).json({ data: response })
        }).catch(err => {
            res.status(400).json(err)
        })
    }),
    create: ((req, res) => {
       // const chuTro_id = req.chuTro._id;
        console.log(req.files);
        res.status(200)
        // const baiDang = new BaiDangs({
        //     _id:  mongoose.Types.ObjectId(),
        //     chuTro_id:chuTro_id,
        //     tieuDe:req.body.tieuDe,
        //     khuTro_id:req.body,khuTro_id,
        //     phongTro_id: req.body.phongTro_id,
        //     moTa: req.body.moTa,
        //     ngayDang: new Date(),
        //     images: image
        // })
    })
}