const inputBtn = document.getElementById("input-btn")
let leads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    console.log("clicked  from EventListner")

    leads.push(inputEl.value)
    renderLeads()
    inputEl.value = ""
})

function renderLeads() {
    let listItems = ulEl.innerHTML
    listItems = ""

    for (let i = 0; i < leads.length; i++) {
        listItems += '<li>' + '<a href = "' + leads[i] + '">' + leads[i] + '</a>' + '</li>' //method:1
        console.log(listItems)
    }
    ulEl.innerHTML = listItems
}