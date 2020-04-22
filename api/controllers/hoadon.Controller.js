const HoaDons = require('../models/hoaDon.Model');
const mongoose = require('mongoose')

module.exports = {
    get: ((req, res) => {
        HoaDons.find().then(response => {
            res.status(200).json({ data: response })
        }).catch(err => {
            res.status(400).json(err)
        })
    }),
    getID: ((req, res) => {
        HoaDons.findById().then(response => {
            res.status(200).json({ data: { response } })
        }).catch(err => {
            res.status(400).json(err)
        })
    }),
    create: ((req, res) => {
        const hoaDon = new HoaDons({
            _id: new mongoose.Types.ObjectId(),
            tenHoaDon: req.body.hoadon.tenHoaDon,
            soTien: Number(req.body.hoadon.soTien),
            noiDung: req.body.hoadon.noiDung,
            tinhTrang: req.body.hoadon.tinhTrang,
        })
        hoaDon.save().then(response=>{
            res.status(200).json({data: response});
        }).catch(err=>{
            res.status(400).json(err);
        })
    }),
    update : ((req,res)=>{
        const id = req.params.id;
        const hoaDonUpdate ={
            tenHoaDon: req.body.hoadon.tenHoaDon,
            soTien: Number(req.body.hoadon.soTien),
            noiDung: req.body.hoadon.noiDung,
            tinhTrang: req.body.hoadon.tinhTrang,
        }
        HoaDons.findByIdAndUpdate(id,hoaDonUpdate).then(response=>{
            res.status(200).json({data: response});
        }).catch(err=>{
            res.status(400).json(err)
        })
    }),
    delete :((req,res)=>{
        const id = req.params.id ;
        HoaDons.findByIdAndDelete(id).then(response=>{
            res.status(200).json({response})
        }).catch(err=>{
            res.status(400).json(err)
        })
    })
}