//criar conexão com o banco
// definir o formato dos modelos (objetos)
const fs = require('fs')
const bcrypt = require('bcrypt')

class Usuario{
    constructor(id, nome, idade, cpf, senha){
        this.id = id,
        this.nome = nome,
        this.idade = idade,
        this.cpf = cpf,
        this.senha = bcrypt.hashSync(senha, 10)
    }
}
const lerDados = () => {
    const dados = fs.readFileSync('./dados.json', 'utf-8');
    return JSON.parse(dados);
};

const salvarDados = (dados) => {
    fs.writeFileSync('./dados.json', JSON.stringify(dados));
};

module.exports = {Usuario, lerDados, salvarDados}