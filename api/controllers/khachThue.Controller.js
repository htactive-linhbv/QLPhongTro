const KhachThues = require('../models/khachThue.Model');
const mongoose = require('mongoose')
const parse = require('date-fns/parse')


module.exports = {
    postImage: ((req, res) => {

        //console.log(req.files);
        console.log(req.files.anhDaiDien);
        console.log(req.body.tenKhachThue);

        res.status(200).json({ mesage: "messsage" })

    }),

    get: ((req, res) => {
        const chuTro_id = req.chuTro._id;
        KhachThues.find({ chuTro_id: chuTro_id }).then(response => {
            res.status(200).json({ data: response })
        }).catch(err => {
            res.status(400).json(err)
        })
    }),
    getId: ((req, res) => {
        const id = req.params.id;
        KhachThues.findById(id).then(response => {
            res.status(200).json({ data: response });
        }).catch(err => {
            res.status(400).json(err)
        })
    }),
    create: ((req, res )=> {  
        const khachThue = new KhachThues({
            _id: mongoose.Types.ObjectId(),
            chuTro_id: req.chuTro._id,
            tenKhachThue: req.body.tenKhachThue,
            sdtKhachThue: req.body.sdtKhachThue,
            ngaySinh: parse(req.body.ngaySinh,'dd-MM-yyyy',new Date()),
            soCMND: req.body.soCMND,
            ngayCapCMND: parse(req.body.ngayCapCMND,'dd-MM-yyyy',new Date()),
            noiCapCMND: req.body.noiCapCMND,
            ngheNghiep: req.body.ngheNghiep,
            gioiTinh: req.body.gioiTinh,
            hoKhau: req.body.hoKhau,
            noiCongTac: req.body.noiCongTac,
            hoTenBoMe: req.body.hoTenBoMe,
            sdtBoMe: req.body.sdtBoMe,
            ghiChu: req.body.ghiChu,
            anhDaiDien: `/images/${req.files.anhDaiDien[0].filename}`,
            anhCMNDTruoc: `/images/${req.files.anhCMNDTruoc[0].filename}`,
            anhCMNDSau: `/images/${req.files.anhCMNDTruoc[0].filename}`,
        })
        khachThue.save().then(response => {
            console.log(response);

            res.status(200).json({ data: response })
        }).catch(err => {
            res.status(400).json(err)
        })
    })
}