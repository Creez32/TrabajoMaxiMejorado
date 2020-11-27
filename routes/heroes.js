const express = require('express')
const router = express.Router()
const mainHeroes = require('../controllers/heroesController')

router.get('/', mainHeroes.data);
router.get('/detalle/:idHeroe', mainHeroes.heroe)
router.get('/bio/:idHeroe/:ok?',mainHeroes.biografia)


module.exports = router