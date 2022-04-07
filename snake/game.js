

import {update as updateSnake, draw as drawSnake, SNAKE_SPEED} from './snake.js'//aqui que modificamos a velocidade do game

let lastRenderTime = 0
const tabuleiro = document.getElementById('tabuleiro')

function main(currentTime){//looping do tempo
  
    window.requestAnimationFrame(main)//chamando em looping a função, sempre que um frame puder ser renderizado
    const secondSinceLastRender = (currentTime - lastRenderTime)/1000 //conforme é criado a variavel 'lastRendertime' depois de computado o 'currentTime' a diferença de tempo/valor entre as variaveis é calculada
    if (secondSinceLastRender < 1/SNAKE_SPEED) return //Se o tempo que é a diferença entre os frames atual e anterior for menor que meio segundo(1/SNAKE_SPEED), não faz nada

    console.log('Render')
    lastRenderTime=currentTime//ultima renderizaçao só é computada no final do loop

    update()
    draw() 
}

window.requestAnimationFrame(main)

function update(){

    updateSnake(tabuleiro)
}

function draw(){
    tabuleiro.innerHTML=''
    drawSnake(tabuleiro)
    

}