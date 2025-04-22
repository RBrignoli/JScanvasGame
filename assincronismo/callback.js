// console.log('inicio do programa')
// setTimeout(() => console.log(' testando o timeout '), 5000)
// function funcao1 () {
//     console.log('testando o timeout de 2 segundos')
// }
// console.log('no fim do programa')

//escrever uma função chamada pedirPizza
// essa função, recebe um sabor, e um callback
// dentro desta função, é executado um timeout de 10 segundos simulando
// a preparação da pizza
// esse callback deve ser outra função chamada comer pizza

// function pedirPizza(sabor, callbackFunc){
//     console.log(`Produzindo a pizza de sabor ${sabor}, aguarde 10 segundos`)
//     setTimeout(callbackFunc, 5000, sabor, 'teste')
// }
// function comerPizza(arg1, arg2){
//     console.log(`comendo a pizza de ${arg1} e ${arg2}`)
// }
// pedirPizza('calabresa', comerPizza)

// criar um algoritmo que simule o funcionamento de uma cozinha
// cada etapa a seguir deve ser executada em uma função diferente,
// com um timeout dentro dela, simulando o tempo de preparo.
//        LigarFogao -> FerverAgua -> CozinharMacarrao ->
//        EscorrerMacarrao -> ServirPrato
// cada etapa leva 3 segundos, e deve ser executada em ordem
// usando callbacks aninhados

function ligarFogao(callback){
    setTimeout(() => {
        console.log('ligando o fogao'),
        callback()
    }, 3000)
}
function ferverAgua(callback){
    setTimeout(() => {
        console.log('fervendo agua')
        callback()
    }, 3000)
}
function cozinharMacarrao(callback){
    setTimeout(() => {
        console.log('cozinhando o macarrao')
        callback()
    }, 3000)
}
function escorrerMacarrao(callback){
    setTimeout(() => {
        console.log('escorrendo agua')
        callback()
    }, 3000)
}
function servirComida(callback){
    setTimeout(() => {
        console.log('servindo prato')
        callback()
    }, 3000)
}

ligarFogao(() => {
    ferverAgua(()=>{
        cozinharMacarrao(()=>{
            escorrerMacarrao(()=>{
                servirComida(()=>{
                    console.log('fim')
                })
            })
        })
    })
})