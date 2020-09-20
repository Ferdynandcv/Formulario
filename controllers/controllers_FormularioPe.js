const express = require("express");
const personalPermanente = require("../models/form2");


const { validationResult } = require("express-validator");
const { prependOnceListener } = require("../models/form2");


exports.vista2 = function (req, res) {

    res.render('formulariope');

};

exports.apis = async function (req, res) {

  
    const personal = await personalPermanente.find();
    res.json(personal);    

};


exports.vistapost = async function (req, res) {

    const personalP = await personalPermanente.find();

    res.render('formulariodatos2', { personalP });

}


exports.enviop = async function (req, res) {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {

        return res.status(422).json({ errors: errors.array() })
    }

    const personalp = new personalPermanente(req.body)

    await personalp.save();

    res.redirect('/formulariope');

};

exports.act = async function (req, res) {

    const { id } = req.params;

    const personal = await personalPermanente.findById(id);

    personal.status = !personal.status;
    await personal.save();

    res.redirect('/datos2');
}


exports.edit = async function (req, res) {

    const { id } = req.params;

    const personalP = await personalPermanente.findById(id);

    res.render('editform2',{personalP});
}


exports.editpost = async function (req, res) {

    const { id } = req.params;

   await personalPermanente.update({_id: id}, req.body);

   res.redirect('/datos2');
}





exports.delet = async function (req, res) {

    const { id } = req.params;

    await personalPermanente.remove({ _id: id });

    res.redirect('/datos2');
}

