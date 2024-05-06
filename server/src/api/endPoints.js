const express = require('express');
const router = express.Router();
const { ping } = require('../controllers/pingController');
const { login } = require('../controllers/loginController')
const {getSalida}= require('../controllers/salidaControler')
const {saveProduct}=require('../controllers/productoController')


router.get('/ping', ping);
router.get('/salida',getSalida);

router.post('/login', login);
router.post('/saveProduct', saveProduct)

module.exports = router;