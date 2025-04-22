const {Usuario, lerDados, salvarDados} = require('../models/model')

const listarUsuarios = (req, res) => {
    const usuarios = lerDados();
    res.json(usuarios);
};
const criarUsuario = (req, res) => {
    const usuarios = lerDados();
    const novo_id = Date.now().toString()
    const {nome, idade, cpf, senha} = req.body
    const novoUsuario = new Usuario(novo_id, nome, idade, cpf, senha)
    usuarios.push(novoUsuario);
    salvarDados(usuarios);
    res.status(201).json(novoUsuario);
};
const atualizarUsuario = (req, res) => {
    const { id } = req.params;
    const usuarios = lerDados();
    const index = usuarios.findIndex(u => u.id === id);
    if (index === -1) {
        return res.status(404).send('Usuário não encontrado');
    }
    

    usuarios[index] = { ...usuarios[index], ...req.body };
    salvarDados(usuarios);
    res.json(usuarios[index]);
};
const deletarUsuario = (req, res) => {
    const { id } = req.params;
    let usuarios = lerDados();
    const usuarioExistente = usuarios.find(u => u.id === id);

    if (!usuarioExistente) {
        return res.status(404).send('Usuário não encontrado');
    }

    usuarios = usuarios.filter(u => u.id !== id);
    salvarDados(usuarios);
    res.send(`Usuário com ID ${id} deletado com sucesso`);
};

module.exports = {listarUsuarios, criarUsuario, atualizarUsuario, deletarUsuario}