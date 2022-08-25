const express = require('express')
const router = express.Router()

const {index, music, admin, login} = require('../controllers/mainContrller')
const accesAdmin =require('../middlewares/adminAcces')
router
     .get('/', index)
     .get('/music', music)
     .get('/admin',accesAdmin, admin)
     .get('/login', login)


module.exports = router