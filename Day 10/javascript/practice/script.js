const containerEl = document.getElementById("container")
containerEl.innerHTML = "<button onclick = 'buy()'>buy</button>"

function buy() {
    containerEl.innerHTML += "<p>Thanks for buying the stuff for which actually you should thank me </p>"
}