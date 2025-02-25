const canvas = document.getElementById('gameCanvas')
const ctx = canvas.getContext('2d')
let gameOver = false

class Entidade {
    #gravidade
    constructor(x,y,largura,altura){
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura=altura
        this.#gravidade=0.5
    }
    desenhar = function (ctx, cor) {
        ctx.fillStyle = cor
        ctx.fillRect(this.x, this.y, this.largura, this.altura)
    }
    atualizar = function(){
        //modificar esta entidade para atualizar posição do objeto na tela
        console.log('atualizar posiçao da entidade na tela')
    }
}
class Personagem extends Entidade{
    #velocidadey
    constructor(x,y,largura,altura){
        super(x,y,largura,altura);
        this.#velocidadey=0
        this.pulando = false
    }
    saltar = function(){
        console.log('saltar')
    }
    atualizar = function(){
        console.log('atualizar personagem na tela')
    }

}
class Obstaculo extends Entidade{
    #velocidadex
    constructor(x,y,largura,altura){
        super(x,y,largura,altura);
        this.#velocidadex=100
    }
    atualizar = function(){
        console.log('atualizar obstaculo na tela')
    }
}

document.addEventListener("click", (e) => {
    if (gameOver==true){
        location.reload()
    }
})

document.addEventListener('keypress', (e) =>{
    if (e.code == 'Space' && personagem.pulando == false){
        // personagem.velocidadey = -15
        // personagem.pulando = true
        personagem.saltar()
    }
})
