const express = require('express')
const router = express.Router()
const mainHeroes = require('../controllers/heroesController')

router.get('/heroes', mainHeroes.data);
router.get('/heroes/detalle/:idHeroe', mainHeroes.heroe)
router.get('/heroes/bio/:idHeroe/:ok?',mainHeroes.biografia)


module.exports = router