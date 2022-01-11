let hasSolvedChallenge = true
let hasHintsLeft = true
    // let hasHintsLeft = false
    //create an if statement that checks that both variable are false
    //If so, run the showSolution() function

// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//     showSolution()
// }

// function showSolution() {
//     console.log("Showing the solution....")
// }

//Logic OR 
if (hasSolvedChallenge === false || hasHintsLeft === true) {
    showSolution()
}

function showSolution() {
    console.log("Showing the solution....")
}