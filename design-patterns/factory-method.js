class Notificacao {
    enviar(mensagem){
        throw new Error("o método enviar() precisa ser implementado na classe filha")
    }
}
class NotificacaoEmail extends Notificacao {
    enviar(mensagem) {
        console.log(`enviando um email: ${mensagem}`)
    }
}
class NotificacaoSMS extends Notificacao {
    enviar(mensagem) {
        console.log(`enviando um sms: ${mensagem}`)
    }
}
class FactoryNotificacao {
    static criarNotificacao(tipo){
        switch (tipo) {
            case 'email':
                return new NotificacaoEmail()
            case 'sms':
                return new NotificacaoSMS()
            default:
                throw new Error('tipo desconhecido')
        }
    }
}

// const notif = new NotificacaoEmail()
// notif.enviar('mensagem teste')

const notif = FactoryNotificacao.criarNotificacao('teste')
notif.enviar('outra mensagem teste')