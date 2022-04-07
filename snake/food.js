import { onSnake, expandSnake} from './snake.js'
import { randomGridPosition} from './grid.js'
let food = getRandomFoodPosition()
const EXPANSION_RATE = 5
export function update(){
    if(onSnake(food)){
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
    }
    

}

export function draw(tabuleiro){
    
        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.y //posicionando o objeto 'snake', baseado na posição do grid na tela
        foodElement.style.gridColumnStart = food.x //mesma coisa, baseando-se no inicio vertical e horizontal do grid
        foodElement.classList.add('food') //adcionando classe à div, para criar o 'corpo' da cobrinha com o estilo que está na linha 29 do html
        tabuleiro.appendChild(foodElement)//objeto snake é derivado da classe "tabuleiro"
    }

function getRandomFoodPosition(){
    let newFoodPosition
    while(newFoodPosition ==null || onSnake(newFoodPosition)){
    newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}