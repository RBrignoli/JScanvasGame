const fs = require('fs')
//writeFile
// const texto = 'teste1'

// console.log('inicio')
// try{
//     fs.writeFileSync('./teste2.txt', texto)
//     console.log('texto alterado com sucesso')
// } catch (err) {
//     console.log(err)
// }
// console.log('fim')

//appendFile
const texto = '\n novo texto para add no fim do arquivo'
fs.appendFile('./teste.txt', texto, {encoding:'utf-8', flush:true}, (err) => {
    console.log(err)
}, )

fs.rename('../renomeado.txt', './renomeado.txt', (err)=>{console.log(err)})

fs.copyFile('./teste.txt', './copia.txt', (err)=>{console.log(err)})

fs.access('./teste.txt',)