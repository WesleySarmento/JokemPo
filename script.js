const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')
const resultImg = document.querySelector('.result-img')

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine()) 
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const radomNumber = Math.floor(Math.random() * 3)


   return choices [radomNumber]
}

const playTheGame = (human, machine) => {

    console.log('Humano: ' + human + ' Maquina: ' + machine)

    if(human === machine){
        result.innerHTML = "Empate"
        resultImg.src="./empatia.png"

    }else if(human === 'paper' && machine === 'rock' || human === 'rock' && machine === 'scissors'
    || human === 'scissors' && machine ==='paper'){
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você Ganhou"
        resultImg.src="./vitoria.png"

    }else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu para Alexa"
        resultImg.src="./choro.png"
    }
}