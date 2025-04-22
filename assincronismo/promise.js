// function calculaAlgo (){
//     return new Promise((resolve, reject) => {
//         const numeroAleatorio = Math.floor(Math.random()*10)
//         if (numeroAleatorio>5){
//             resolve('aqui vai ser chamado a funçao de sucesso')
//         } else {
//             reject('chamar a função de erro')
//         }
//     })
// }
// calculaAlgo()
//     .then((msg)=> {console.log(msg)})
//     .catch((msg)=> {console.log(`erro: ${msg}`)})

// function ligarFogao(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log('ligando o fogao')
//             resolve('ligou o fogao')
//         }, 3000)
//     })
// }
// function ferverAgua(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log('fervendo agua')
//             resolve()
//         }, 3000)
//     })
// }
// function cozinharMacarrao(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log('cozinhando macarrao')
//             resolve()
//         }, 3000)
//     })
// }
// function escorrerMacarrao(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log('escorrendo macarrao')
//             resolve()
//         }, 3000)
//     })
// }
// function servirComida(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log('servindo comida')
//             resolve()
//         }, 3000)
//     })
// }

ligarFogao()
    .then(() => ferverAgua())
    .then(() => cozinharMacarrao())
    .then(() => escorrerMacarrao())
    .then(() => servirComida())
    .then(() => console.log('fim'))
    .catch((err) => console.log(err))


const tarefa1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('tarefa1 finalizada')
        resolve()
    }, 2000)
})
const tarefa2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('tarefa2 finalizada')
        resolve()
    }, 6000)
})
const tarefa3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('tarefa3 finalizada')
        resolve()
    }, 3000)
})
Promise.all([tarefa1, tarefa2, tarefa3])
    .then(() => {
        console.log('uma das tarefas foi executada')
    })