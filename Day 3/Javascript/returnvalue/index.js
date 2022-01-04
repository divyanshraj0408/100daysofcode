let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player1Time > player2Time) {
        return player2Time
    } else {
        return player1Time
    }
}
let fastestRace = getFastestRaceTime()
console.log(fastestRace)

//Write a function that returns the total race time
//call/invoke the function and store the returned value in a new variable
//finally, log that variable out

function getToatalRaceTime() {
    return player1Time + player2Time
}
let totalTime = getToatalRaceTime()
console.log(totalTime)