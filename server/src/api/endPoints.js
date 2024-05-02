const express = require('express');
const router = express.Router();
const { ping } = require('../controllers/pingController');
const { login } = require('../controllers/loginController')
const {getSalida}= require('../controllers/salidaControler')


router.get('/ping', ping);
router.get('/salida',getSalida);

router.post('/login', login);


module.exports = router;