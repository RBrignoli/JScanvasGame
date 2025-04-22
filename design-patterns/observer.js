// nome de classe: começa com letra maiuscula
// nome de função: sempre camelCase
// nome de variavel: sempre snake_case



class SistemaDeNotificacao {
    #observadores
    constructor(){
        this.#observadores = [usuario5, usuario6, usuario7]
    }
    addObservador(observador){
        this.#observadores.push(observador)
    }
    removerObservador(observador){
        this.#observadores = this.#observadores.filter(
            (item)=> item.nome != observador.nome
        )
    }
    notificar(dados){
        this.#observadores.forEach(observador => observador.update(dados))
    }
}

class Observador {
    constructor(nome){
        this.nome = nome
    }
    update(mensagem){
        console.log(`O usuario ${this.nome} recebeu a notificacao ${mensagem}`)
    }
}

const sistema_notificacao = new SistemaDeNotificacao()
const usuario1 = new Observador('Ramon')
const usuario2 = new Observador('Mateus')
const usuario3 = new Observador('Diego')

sistema_notificacao.addObservador(usuario1)
sistema_notificacao.addObservador(usuario2)

sistema_notificacao.notificar('Nova mensagem')
sistema_notificacao.removerObservador(usuario1)
sistema_notificacao.notificar('Outra mensagem')
