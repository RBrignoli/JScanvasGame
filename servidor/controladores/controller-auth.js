const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { Usuario, lerDados, salvarDados } = require('../models/model')

const login = (req, res) => {
    const {cpf, senha} = req.body
    const usuarios = lerDados()
    const index = usuarios.findIndex(user => user.cpf === cpf);
    if (index === -1) {
        return res.status(404).send('Usuário não encontrado');
    }
    const user = usuarios[index]
    if(!bcrypt.compareSync(senha, user.senha)){
        res.status(400).json({msg:"cpf ou senha incorreta"})
    }
    const token = jwt.sign(user, 'privatekeySuperSegura', {expiresIn: 1000*60*60})
    res.status(200).cookie("TokenJWT", token).json({msg:"Logado com sucesso"})
}

module.exports = {login}