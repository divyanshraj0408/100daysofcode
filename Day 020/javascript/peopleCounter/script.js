let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}


function decrement() {
    count -= 1
    countEl.innerText = count
}




function save() {
    console.log(count + " is the saved count")
    let countStr = count + " - "
    count = 0
    countEl.innerText = count
    saveEl.innerHTML += countStr
}