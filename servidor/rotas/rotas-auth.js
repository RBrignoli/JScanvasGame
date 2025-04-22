const express = require('express')
const router_auth = express.Router()
const {login} = require('../controladores/controller-auth')

router_auth.post('/login', login)


module.exports = router_auth