const DichVus = require('../models/dichVu.Model')

module.exports = {
    getAll: ((req, res) => {
        DichVus.find().then(response => {
            res.status(200).json({ data: response })
        }).catch(err => {
            res.status(400).json(err)
        })

    }),
    getID:((req,res)=>{
        const id = req.params.id;
        DichVus.findById(id).then(data=>{
            res.status(200).json(data)
        }).catch(err=>{
            res.status(400).json(err)
        })
    }),
    create: ((req, res) => {
        const idChuTro = req.chuTro.id
        const dichVu = new DichVus({

            tenDV: req.body.dichvu.tenDV,
            khuTro_id: idChuTro,
            moTaDV: req.body.dichvu.moTaDV,
            donGia: req.body.dichvu.donGia,
            donVi: req.body.dichvu.donVi,
            quyTacTinhTien: req.body.dichvu.quyTacTinhTien,
            trangThai: req.body.dichvu.trangThai,
        });
        dichVu.save().then(response => {
            res.status(200).json(response);
        }).catch(err => {
            res.status(400).json(err)
        })
    }),
    delete:((req,res)=>{
        const id = req.params.id;
        DichVus.findByIdAndDelete(id).then(response=>{
            res.status(200).json({data:response})
        }).catch(err=>{
            res.status(400).json(err)
        })
    }),
    update: ((req,res)=>{
        const id = req.params.id;
        const idChuTro = req.chuTro.id;
        
        const dichvuUpdate = {
            tenDV: req.body.dichvu.tenDV,
            moTaDV: req.body.dichvu.moTaDV,
            khuTro_id: idChuTro,
            donGia: req.body.dichvu.donGia,
            donVi: req.body.dichvu.donVi,
            quyTacTinhTien: req.body.dichvu.quyTacTinhTien,
            trangThai: req.body.dichvu.trangThai,
        }
        DichVus.findByIdAndUpdate(id,dichvuUpdate).then(response=>{
            res.status(200).json({data:response})
        }).catch(err=>{
            res.status(400).json(err)
        })
    })


}