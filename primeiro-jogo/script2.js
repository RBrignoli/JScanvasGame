const canvas = document.getElementById('jogoCanvas')
const ctx = canvas.getContext('2d')
let gameOver = false
let maxPontuacao = localStorage.getItem('maxPontuacao') ? parseInt(localStorage.getItem('maxPontuacao')) : 0

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
    
    getGravidade() {
        return this.#gravidade;
    }
}
class Personagem extends Entidade{
    #velocidadey
    #pulando
    #pontuou
    #pontuacao
    constructor(x,y,largura,altura){
        super(x,y,largura,altura);
        this.#velocidadey=0
        this.#pulando = false
        this.#pontuou = false
        this.#pontuacao = 0
    }
    saltar = function(){
        this.#velocidadey -= 15
        this.#pulando = true
    }
    isPersonagemPulando = function(){
        return this.#pulando
    }
    atualizar = function(){
        if(this.#pulando == true){
            this.#velocidadey += this.getGravidade()
            this.y += this.#velocidadey
            if(this.y>=canvas.height-50){
                this.#velocidadey = 0
                this.#pulando=false
                this.#pontuou=false
            }
        }
    }
    verificarColisao = function(obstaculo){
        if(
            this.x < obstaculo.x + obstaculo.largura &&
            this.x + this.largura > obstaculo.x &&
            this.y < obstaculo.y + obstaculo.altura &&
            this.y + this.altura > obstaculo.y
        ){  
            this.#houveColisao(obstaculo)
        }
    }
    verificarPontuacao= function(obstaculo){
        if(!this.#pontuou && this.x > obstaculo.x + obstaculo.largura){  
            this.#pontuou = true
            this.#pontuacao +=1
        }
    }
    #houveColisao = function (obstaculo){
        obstaculo.pararObstaculo()
        obstaculo.atualizar()
        ctx.fillStyle='red'
        ctx.fillRect((canvas.width/2)-200,(canvas.height/2)-50,400,100)
        ctx.fillStyle='black'
        ctx.font="50px Arial"
        ctx.fillText("GAME OVER",(canvas.width/2)-150,(canvas.height/2))
        gameOver=true
        ctx.font="20px Arial"
        if (this.#pontuacao > maxPontuacao){
            localStorage.setItem('maxPontuacao', this.#pontuacao)
            ctx.fillText(`Novo Record: ${this.#pontuacao}`,(canvas.width/2)-150,(canvas.height/2)+40)
        }else{
            ctx.fillText(`Sua pontuação: ${this.#pontuacao}, record atual: ${maxPontuacao}`,(canvas.width/2)-150,(canvas.height/2)+40)

        }
    }
    desenhaPontuacao = function(){
        ctx.fillStyle='white'
        ctx.font="20px Arial"
        ctx.fillText(`pontos: ${this.#pontuacao}`,50,50)
    }

}
class Obstaculo extends Entidade{
    #velocidadex
    constructor(x,y,largura,altura){
        super(x,y,largura,altura);
        this.#velocidadex=4
    }
    getVelocidadeX = function () {
        return this.#velocidadex
    }
    atualizar = function(){
        this.x -= this.getVelocidadeX()
        if (this.x <= 0-this.largura){
            this.x = canvas.width-100
            let altura_random = (Math.random() * 50)+90
            this.altura = altura_random
            this.y = canvas.height - altura_random
            this.#velocidadex += 0.5
        }
    }
    pararObstaculo = function () {
        this.#velocidadex = 0
    }
}

const obstaculo = new Obstaculo(canvas.width-100,canvas.height-100,50,100)
const personagem = new Personagem(50, canvas.height-50, 50, 50)

document.addEventListener("click", (e) => {
    if (gameOver==true){
        location.reload()
    }
})

document.addEventListener('keypress', (e) =>{
    if (e.code == 'Space' && personagem.isPersonagemPulando() == false){
        // personagem.velocidadey = -15
        // personagem.pulando = true
        personagem.saltar()
    }
})

function loop () {
    ctx.clearRect(0,0,canvas.width, canvas.height)

    obstaculo.desenhar(ctx, 'red')
    personagem.desenhar(ctx, 'white')
    personagem.verificarColisao(obstaculo)
    personagem.verificarPontuacao(obstaculo)
    obstaculo.atualizar()
    personagem.atualizar()
    personagem.desenhaPontuacao()
    requestAnimationFrame(loop)
}

loop()

// adicionar pontuação - ok
// adicionar multiplos objetos
// aplicar polimorfismo para mudar o desenho do personagem