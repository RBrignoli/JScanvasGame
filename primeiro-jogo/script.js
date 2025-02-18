const canvas = document.getElementById('jogoCanvas')
const ctx = canvas.getContext('2d')

document.addEventListener("click", (e) => {
    if (gameOver==true){
        location.reload()
    }
})

let gameOver = false

const personagem = {
    posicaox:50,
    posicaoy: canvas.height -50,
    largura: 50,
    altura: 50
}
function desenhaPersonagem () {
    ctx.fillStyle = 'white'
    ctx.fillRect(personagem.posicaox, personagem.posicaoy, personagem.largura, personagem.altura)
}
const obstaculo = {
    posicaoXObstaculo: canvas.width-100,
    posicaoYObstaculo: canvas.height - 100,
    altura: 100,
    largura: 50,
    velocidade: 5
}
function desenhaObstaculo (){
    ctx.fillStyle = 'red'
    ctx.fillRect(
        obstaculo.posicaoXObstaculo,
        obstaculo.posicaoYObstaculo,
        obstaculo.largura,
        obstaculo.altura
    )
}

function atualizaObstaculo(){
    obstaculo.posicaoXObstaculo -= obstaculo.velocidade
}

function verificaColisao(){
    if(
        personagem.posicaox - 1 < obstaculo.posicaoXObstaculo + obstaculo.largura &&
        personagem.posicaox + personagem.largura > obstaculo.posicaoXObstaculo
    ){  
        houveColisao()
    }
}

function houveColisao (){
    obstaculo.velocidade = 0
    atualizaObstaculo()
    ctx.fillStyle='red'
    ctx.fillRect((canvas.width/2)-200,(canvas.height/2)-50,400,100)
    ctx.fillStyle='black'
    ctx.font="50px Arial"
    ctx.fillText("GAME OVER",(canvas.width/2)-150,(canvas.height/2))
    gameOver=true
}

function loop () {
    ctx.clearRect(0,0,canvas.width, canvas.height)

    desenhaObstaculo()
    desenhaPersonagem()
    atualizaObstaculo()
    verificaColisao()
 
    requestAnimationFrame(loop)
}

loop()