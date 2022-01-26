const cardEl = document.getElementById("card-el")
const inputEl = document.getElementById("input-el")
let note = []
note.push(inputEl.value)


function save() {

    inputEl.value = ""
    render()
}

function render() {
    let noteItem = cardEl.innerHTML
    noteItem = ""
    note.push(inputEl.value)
    for (let i = 0; i < note.length; i++) {
        noteItem += ` <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-body">
        <p class="card-text" id="text">${note[i]}</p>
    </div>`
    }
    cardEl.innerHTML = noteItem
}