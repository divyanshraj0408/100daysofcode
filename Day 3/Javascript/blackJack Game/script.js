 let firstCard = Math.floor(Math.random() * 11)
 let secondCard = Math.floor(Math.random() * 11)
 let cards = [firstCard, secondCard]
 let sum = firstCard + secondCard
 let hasBlackJack = false
 let isAlive = true

 let messageEl = document.getElementById("message-el")
 let message = messageEl

 let sumEl = document.getElementById("sum-el")
 let cardsEl = document.getElementById("cards-el")


 function startGame() {
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
     let card = Math.floor(Math.random() * 11)
     sum += card
     cards.push(card)
     console.log(cards)
     renderGame()
 }