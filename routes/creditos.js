const express = require('express')
const router = express.Router()
const controlador = require('../controllers/footerControllers')

router.get('/creditos', controlador.creditos)

module.exports = router