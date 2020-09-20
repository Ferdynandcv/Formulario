const express = require('express');
const router = express.Router();

const formCar = require("../controllers/controllers_FormularioPt");
const homeview = require("../controllers/controllers_home");

const { check } = require("express-validator");


router.get("/formulariopt", formCar.vista);

router.get("/datos", formCar.vistapost);

router.get("/",homeview.home);

router.get("/api",formCar.apis);

router.post("/enviadoBD",

    [
        check('nombre').isLength({ min: 5 }),

        check('puesto').isIn(['Administrador', 'Guardia', 'Jefe']),

        check('lugar').isLength({ min: 10 }),

        check('tel').isLength({ min: 8 })
            .isNumeric(),

    ],

    formCar.envio,
)

router.get('/actualiza/:id',formCar.act);

router.get('/delete/:id',formCar.delet);

router.get('/editform/:id',formCar.edit);

router.post('/editform/:id',formCar.editpost);


module.exports = router;


