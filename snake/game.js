

import {update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection} from './snake.js'//importando as funçoes das linhas 5 e 16 do script 'snake', script particular do obj cobrinha
import{update as updateFood, draw as drawFood} from './food.js'
import{outsideGrid} from './grid.js'

let lastRenderTime = 0
let gameOver = false
const tabuleiro = document.getElementById('tabuleiro') //passando o elemento html para variavel javascript

function main(currentTime){//looping do tempo
    
    if (gameOver){
        if(confirm('Você perdeu! Aperte Ok para continuar.')){
            window.location.reload()
        }
        return
    }
    window.requestAnimationFrame(main)//chamando em looping a função, sempre que um frame puder ser renderizado
    const secondSinceLastRender = (currentTime - lastRenderTime)/1000 //conforme é criado a variavel 'lastRendertime' depois de computado o 'currentTime' a diferença de tempo/valor entre as variaveis é calculada
    if (secondSinceLastRender < 1/SNAKE_SPEED) return //Se o tempo que é a diferença entre os frames atual e anterior for menor que meio segundo(1/SNAKE_SPEED), ignora o resto dos procedimentos da função

    console.log('Render')
    lastRenderTime=currentTime//ultima renderizaçao só é computada no final do loop

    update() //looping que realiza o processamento das instancias e estados do game para as proximas animações
    draw() //a proxima animaçao, dado toda a mecanica do jogo computada em 'update'
}

window.requestAnimationFrame(main)//para começar o loop pela primeira vez

function update(){

    updateSnake(tabuleiro)
    updateFood(tabuleiro)
    checkDeath()
}

function draw(){
    tabuleiro.innerHTML=''
    drawSnake(tabuleiro)
    drawFood(tabuleiro)
    

}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}