const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const btnOpen = document.querySelector("#closed")
const btnReset = document.querySelector("#reset")

btnOpen.addEventListener('click', handleOpenClick())
document.addEventListener('keydown', clickEnterReset)
btnReset.addEventListener('click', toggleScreen)


function handleOpenClick() {
    toggleScreen()

    let yourLuck = luckMessage()

    screen2.querySelector("p").innerText = yourLuck
}

function handleResetClick(event) {
    event.preventDefault()

    toggleScreen()
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function luckMessage() {
    const messageNumber = Math.round(Math.random() * 10)

    switch (messageNumber) {
        case 0:
            return 'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.'
            
        case 1:
            return 'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.'
        
        case 2:
            return 'A maior de todas as torres começa no solo.'
            
        case 3:
            return 'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.'
        
        case 4:
            return 'Siga os bons e aprenda com eles.'
            
        case 5:
            return 'Não importa o tamanho da montanha, ela não pode tapar o sol.'

        case 6:
            return 'Todas as coisas são difíceis antes de se tornarem fáceis.'
        
        case 7:
            return 'Você é do tamanho do seu sonho.'
            
        case 8:
            return 'O conhecimento é a única virtude e a ignorância é o único vício.'
        
        case 9:
            return 'A maior barreira para o sucesso é o medo do fracasso.'
            
        case 10:
            return 'O verdadeiro homem mede a sua força, quando se defronta com o obstáculo.'

        default:
            break;
    }
}

function clickEnterReset(e) {
    if(e.key == 'Enter' && screen2.classList.contains('hide')) {
        handleOpenClick()
    }
}