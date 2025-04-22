const fs = require('fs')
// ler um arquivo assincrono
console.log('inicio')
fs.readFile('./teste.txt', {encoding:'utf-8', flag:'r+'}, (err, data)=>{
    if(err){
        console.log(err)
    } else {
        console.log('conteudo: ', data)
    }
})
console.log('fim')

//ler um arquivo de forma sincrona
console.log('inicio2')
try{
    const dados = fs.readFileSync('./teste2.txt', 'utf-8')

    console.log('conteudo2: ', dados)
} catch (err) {
    console.log(err)
}
console.log('fim2')

//ler um arquivo via promise
async function lerArquivo () {
    const data = await fs.promises.readFile('./texto.txt', 'utf-8')
    console.log(data)
}


//escrever num arquivo
    //criar
    //substituir
    //adicionar no final
// modificar um arquivo
    //deleta
    //renomear
    //duplicar