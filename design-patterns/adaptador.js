
class ferramentaPagamentoAntiga {
    processoPagamento(quantia){
        console.log('vai fazer o pagamento da', quantia)
    }
}
class novaVersaoAPIPagamento {
    pagar(detalhamento_pagamento){
        console.log('fazer o pagamento no novo sistema', detalhamento_pagamento.valor)
    }
}

class AdaptadorPagamento {
    constructor(novaVersaoAPIPagamento){
        this.novaVersaoAPIPagamento = novaVersaoAPIPagamento
    }
    processoPagamento(quantia){
        this.novaVersaoAPIPagamento.pagar({valor: quantia})
    }
}

const novoPagamento = new novaVersaoAPIPagamento()
const adaptador = new AdaptadorPagamento(novoPagamento)

adaptador.processoPagamento(100)


