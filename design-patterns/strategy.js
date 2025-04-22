class EstrategiaEnvio {
    calcularCusto(custo){
        throw new Error('Metodo de envio inexisistente ou precisa ser implementado')
    }
}
class EstrategiaEnvioPremium {
    calcularCusto(custo){
        return custo * 1.2
    }
}
class EstrategiaEnvioPlus {
    calcularCusto(custo){
        return custo * 1.8
    }
}
class Pedido {
    constructor(custo, estrategia){
        this.custo = custo
        this.estrategia = estrategia
    }
    getCustoFinal(){
        return this.estrategia.calcularCusto(this.custo)
    }
}
const pedido1 = new Pedido(50, new EstrategiaEnvioPlus())
console.log(pedido1.getCustoFinal())
const pedido2 = new Pedido(200, new EstrategiaEnvioPremium())
console.log(pedido2.getCustoFinal())