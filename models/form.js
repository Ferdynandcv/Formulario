const { mongo } = require("mongoose");

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personalTemporal_schema = Schema({

        nombre: String,
        puesto: String,
        lugar: String,
        fecha: Date,
        tel: String

});

module.exports = mongoose.model('personalTemporal', personalTemporal_schema);

