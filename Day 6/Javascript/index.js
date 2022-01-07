let age = 15

function discount() {
    if (age < 6) {
        console.log("Free")
    } else if (age < 18) {
        console.log("Child Discount")
    } else if (age < 27) {
        console.log("Student discount")
    } else if (age < 67) {
        console.log("full price")
    } else {
        console.log("Senior citizen discount")
    }
}
discount()