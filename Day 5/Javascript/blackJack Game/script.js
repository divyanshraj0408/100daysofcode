let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false

let messageEl = document.getElementById("message-el")
let message = messageEl

let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let player = {
    name: "Divyansh",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.innerHTML = player.name + ": $" + player.chips


function startGame() {
    isAlive = true
    let randNumber1 = Math.floor(Math.random() * 13) + 1
    let randNumber2 = Math.floor(Math.random() * 13) + 1
    cards = [randNumber1, randNumber2]
    sum = randNumber1 + randNumber2
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "

    }

    sumEl.innerHTML = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?😊"

    } else if (sum === 21) {
        message = "Wohoo! You've got blackJack.🎉"

        hasBlackJack = true
    } else {
        message = "You are out of the game🥺"

        isAlive = false
    }
    messageEl.innerHTML = message

}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }

}

function getRandomCard() {
    let randNumber = Math.floor(Math.random() * 13) + 1
    if (randNumber === 1) {
        return 11
    } else if (randNumber > 11) {
        return 10
    }
    return randNumber
}