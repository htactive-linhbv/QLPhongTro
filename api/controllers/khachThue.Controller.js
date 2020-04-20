const KhachThues = require('../models/khachThue.Model');

module.exports = {
    get:((req,res)=>{
        const chuTro_id = req.chuTro.chuTro_id;
        KhachThues.find({chuTro_id:chuTro_id}).then(response=>{
            res.status(200).json({data:response})
        }).catch(err=>{
            res.status(400).json(err)
        })
    }),
    getChiTiet:((req,res)=>{
        const id = req.params.id;
        KhachThues.findById(id).then(response=>{
            
        })
    })
}