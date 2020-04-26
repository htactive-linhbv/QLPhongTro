const HopDongs = require('../models/hopDong.Model')
const mongoose = require('mongoose')

module.exports = {
    getAll: ((req, res) => {
        const chuTro_id = req.chuTro._id;
        HopDongs.find({ chuTro_id: chuTro_id }).then(response => {
            res.status(200).json({ data: response })
        }).catch(err => {
            res.status(400).json(err)
        })
    }),
    getId: ((req, res) => {
        const id = req.params.id;
        HopDongs.findById(id).then(response => {
            res.status(200).json({ data: response })
        }).catch(err => {
            res.status(400).json(err)
        })
    }),
    create: ((req, res) => {
        const hopDong = new HopDongs({
            _id: mongoose.Types.ObjectId,
            chuTro_id: req.chuTro._id,
            tenHopDong: req.body.tenHopDong,
            loaiHopDong: req.body.loaiHopDong,
            khachThue_id: req.body.khachThue_id,
            phongTro_id: req.body.phongTro_id,
            thoiHan: req.body.thoiHan,
            ngayBatDau: req.body.ngayBatDau,
            NgayKetThuc: req.body.NgayKetThuc,
            tienCoc: req.body.tienCoc,
            noiDung: req.body.noiDung,
        })
    })
}