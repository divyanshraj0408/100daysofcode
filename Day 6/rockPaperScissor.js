let hands = ["rock", "paper", "scissors"]

function randomNumber() {
    let randNumber = hands[Math.floor(Math.random() * hands.length)]
    console.log(randNumber)
}
randomNumber()