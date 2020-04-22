
const ChuTro = require('../models/chuTro.Model');
const bcrypt = require('bcrypt');
//const { validationResult } = require('express-validator');
const { add } = require('date-fns');
const mongoose = require('mongoose')

module.exports = {
    get: (req, res) => {
        // const  lengthdata = ChuTro.countDocuments({},number=>number);
        ChuTro.find().then(data => {


            res.status(200).json({
                data: data,

            })
        }).catch(err => {
            res.start(401).json(err)
        })
    },
    getPage: (req, res) => {
        const page = req.params.page;
        ChuTro.find().limit(10).skip((page - 1) * 10)
            .then(data => {
                res.status(200).json({
                    messenger: "Get success",
                    data: data
                })
            })
            .catch(err => {
                res.status(404).json({
                    messenger: "get err",
                    error: err
                })
            });

    },
    getId: (req, res) => {
        const id = req.params.id;
        ChuTro.findById(id).then(data => {
            res.status(200).json({
                messenger: "Get success",
                data: data
            })
        })
            .catch(err => {
                res.status(404).json({
                    messenger: "get err",
                    error: err
                })
            })
    },
    create: (req, res) => {
        ChuTro.find({ email: req.body.chutro.email }).then(response => {
            if (response.length === 0) {
                //mã hoá mật khảu
                const salt = bcrypt.genSaltSync(10);
                const PasswardHash = bcrypt.hashSync(req.body.chutro.password, salt)

                // get date hien tai
                let start = Date.now();


                //+ goidk = ngayHetHan
                const goi = Number(req.body.chutro.goi);

                let end = add(start, { days: goi * 30 });


                // tạo new đối tượng chutro
                const chuTro = new ChuTro({
                    _id: new mongoose.Types.ObjectId(),
                    hoVaTen: req.body.chutro.hoVaTen,
                    email: req.body.chutro.email,
                    soDienThoai: req.body.chutro.soDienThoai,
                    password: PasswardHash,
                    ngayDangKy: start,
                    ngayHetHan: end,
                })

                // lưu vào db
                chuTro.save((err, response) => {
                    if (err) {
                        res.status(401).json(err);
                    }
                    res.status(200).json({
                        messenger: "succsess",
                        dataChuTro: response
                    });
                })
                
            } else {
                res.status(400).json({err:"email da ton tai"})
            }


        }).catch(err => {
            console.log(err);
            res.status(400)
        })



    },
    delete: (req, res) => {
        const id = req.params.id;
        ChuTro.findByIdAndDelete(id).then(() => {
            res.status(202).json({
                messenger: "delete success"
            })
        }).catch(err => {
            res.status(401).json(err)
        })
    },
    update: ((req, res) => {
        const id = req.params.id;

        const chutro = {
            hoVaTen: req.body.chutro.hoVaTen,
            email: req.body.chutro.email,
            soDienThoai: req.body.chutro.soDienThoai,
        };
        ChuTro.findByIdAndUpdate(id, chuTro).then(data => {
            res.status(202).json({
                messenger: "delete success",
                data: data
            })
        }).catch(err => {
            res.status(401).json(err)
        })
    })

}