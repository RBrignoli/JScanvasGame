const express = require('express')
const router_users = express.Router()
const {listarUsuarios, criarUsuario, atualizarUsuario, deletarUsuario} = require('../controladores/controller')

router_users.get('/usuarios', listarUsuarios)
router_users.post('/usuarios', criarUsuario)
router_users.patch('/usuarios/:id', atualizarUsuario)
router_users.delete('/usuarios/:id', deletarUsuario)

module.exports = router_users