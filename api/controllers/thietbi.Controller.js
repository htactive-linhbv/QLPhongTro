const ThietBis = require('../models/thietBi.Model');

module.exports = {
    getAll: ((req, res) => {
        ThietBis.findById().then(response => {
            res.status(200).json({ data: response });
        }).catch(err => {
            res.status(400).json(err);
        })
    }),
    getID: ((res, req) => {
        const id = req.params.id;
        ThietBis.findById(id).then(response => {
            res.status(200).json({ data: response });
        }).catch(err => {
            res.status(400).json(err)
        })
    }),
    create: ((req, res) => {
        const thietbi = new ThietBis({
            tenThietBi: req.body.thietbi.tenThietBi,
            gia: Number(req.body.thietbi.gia),
            moTa: req.body.thietbi.moTa,
        })
        thietbi.save().then(response=>{
            res.status(200).json({data: response})
        }).catch(err=>{
            res.status(400).json(err)
        })
    }),
    update: ((req,res)=>{
        const id = req.params.id;
        const thietbiUpdate = {
            tenThietBi: req.body.thietbi.tenThietBi,
            gia: Number(req.body.thietbi.gia),
            moTa: req.body.thietbi.moTa,
        }
        ThietBis.findByIdAndUpdate(id,thietbiUpdate).then(response=>{
            res.status(200).json({data:response})
        }).catch(err=>{
            res.status(400).json(err)
        })
    }),
    delete:((req,res)=>{
        const id = req.params.id;
        ThietBis.findByIdAndDelete(id).then(response=>{
            res.status(200).json(response);
        }).catch(err=>{
            res.status(400).json(err);
        })
    })

}