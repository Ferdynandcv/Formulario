const express = require('express');
const router = express.Router();

const formpp = require("../controllers/controllers_FormularioPe");

const { check, checkSchema } = require("express-validator");


router.get("/formulariope", formpp.vista2);

router.get("/datos2", formpp.vistapost);


router.get("/form2", formpp.apis);

router.post("/enviadoBDII",

    [
        check('nombre').isLength({ min: 5 }),
        check('snombre').isLength({ min: 5 }),
        check('snombre').isLength({ min: 5 }),
        check('apellido').isLength({ min: 5 }),
        check('sapellido').isLength({ min: 4 }),
        check('DPI').isLength({ min: 13 }).isNumeric(),
        check('NIP').isLength({ min: 5 }).isNumeric(),
        check('pueston'),
        check('puestof').isLength({ min: 5 }),
        check('depart').isLength({ min: 10 }),
        check('emailinst').isEmail(),
        check('emailper').isEmail(),
        check('telCelu').isLength({ min: 8 }).isNumeric(),
        check('telCasa').isLength({ min: 8 }).isNumeric(),

    ],

    formpp.enviop,
)

router.get('/actualiza2/:id',formpp.act);

router.get('/delete2/:id',formpp.delet);

router.get('/editform2/:id',formpp.edit);

router.post('/editform2/:id',formpp.editpost);


module.exports = router;


