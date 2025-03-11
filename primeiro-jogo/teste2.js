class ContaBanco {
    #saldo = 0
    depositar(valor) {
        if (valor>0){
            this.#saldo += valor
        }
    }
}
const conta = new ContaBanco()
conta.depositar(100)
console.log(conta.saldo)