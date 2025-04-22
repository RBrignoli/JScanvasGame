function pegarUsuario () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({nome:'Ramon', idade:28})
        }, 3000)
    })
}
function procuraUsuario (nome) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`usuario ${nome} encontrado na lista`)
        }, 2000)
    })
}

// pegarUsuario().then(
//     (user) => console.log(`O usuario de nome ${user.nome} tem ${user.idade} anos`))
async function mostrarUsuario() {
    try{
        const user = await pegarUsuario()
        const resposta = await procuraUsuario(user.nome)
        console.log(resposta)
        console.log(`O usuario de nome ${user.nome} tem ${user.idade} anos`)
    } catch (erro) {
        console.log(erro)
    }
}
mostrarUsuario()