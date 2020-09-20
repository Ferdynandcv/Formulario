const { mongo } = require("mongoose");

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personalPermanente_schema = Schema({

        nombre: String,
        snombre: String,
        apellido: String,
        sapellido: String,
        apellidoc: String,
        DPI: Number,
        NIP: Number,
        nacimiento: Date,
        pueston: String,
        puestof: String,
        depart: String,
        emailinst: String,
        emailper: String,
        telCelu: String,
        telCasa: String

});

module.exports = mongoose.model('personalPermanente', personalPermanente_schema);