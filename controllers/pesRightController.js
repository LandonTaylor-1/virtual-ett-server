const PesRight = require('../models/pesRightModel');

exports.create = function create(req,res) {
    let item = {
        location: req.body.location,
        color: req.body.color,
        level: req.body.level,
        name: req.body.name
    };
    let newPesRight = new PesRight(item)
    newPesRight.save();
}

exports.list = function list(req,res) {
    PesRight.find((e,v)=>{
        return res.json(v);
    });
}

exports.show = function show(req, res) {
    PesRight.find({name: req.params.name}, (err, v)=>{
        return res.json(v);
    });
}