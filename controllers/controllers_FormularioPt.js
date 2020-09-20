const express = require("express");
const personalTemporal = require("../models/form");


const { validationResult } = require("express-validator");
const { prependOnceListener } = require("../models/form");


exports.vista =  function (req, res) {

    res.render('formulariopt');

};



exports.apis = async function (req, res) {

  
    const personal = await personalTemporal.find();

    res.json(personal);
  

    

};



exports.vistapost = async function (req, res) {



    const personal = await personalTemporal.find();

    res.render('formulariodatos', { personal });
    

}


exports.envio = async function (req, res) {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {

        return res.status(422).json({ errors: errors.array() })
    }

    const personal = new personalTemporal(req.body)
    await personal.save();

    res.redirect('/formulariopt');

};

exports.act = async function (req, res) {

    const { id } = req.params;

    const personal = await personalTemporal.findById(id);

    personal.status = !personal.status;
    await personal.save();

    res.redirect('/datos');
}


exports.edit = async function (req, res) {

    const { id } = req.params;

    const personal = await personalTemporal.findById(id);

    res.render('editform',{personal});
}


exports.editpost = async function (req, res) {

    const { id } = req.params;

   await personalTemporal.update({_id: id}, req.body);

   res.redirect('/datos');
}





exports.delet = async function (req, res) {

    const { id } = req.params;

    await personalTemporal.remove({ _id: id });

    res.redirect('/datos');
}

