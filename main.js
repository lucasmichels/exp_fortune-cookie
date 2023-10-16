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
            return 'I didn’t come this far to only come this far.'
            
        case 1:
            return 'If you want the rainbow, you gotta put up with the rain!'
        
        case 2:
            return 'Appreciate. Appreciate. Appreciate.'
            
        case 3:
            return 'Move in the direction of your dreams.'
        
        case 4:
            return 'A smile is your passport into the hearts of others.'
            
        case 5:
            return 'Change can hurt, but it leads a path to something better.'

        case 6:
            return "What ever you're goal is in life, embrace it visualize it, and for it will be yours."
        
        case 7:
            return 'You cannot love life until you live the life you love.'
            
        case 8:
            return 'It is now, and in this world, that we must live.'
        
        case 9:
            return 'A stranger, is a friend you have not spoken to yet.'
            
        case 10:
            return "Never give up on someone that you don't go a day without thinking about."

        default:
            break;
    }
}

function clickEnterReset(e) {
    if(e.key == 'Enter' && screen2.classList.contains('hide')) {
        handleOpenClick()
    }
}
