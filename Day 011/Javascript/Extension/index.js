let leads = []

const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("leads"))
console.log(leadsFromLocalStorage)
inputBtn.addEventListener("click", function() {
    leads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("leads", JSON.stringify(leads))
    renderLeads()
    console.log(localStorage.getItem("leads"))

})

function renderLeads() {
    let listItems = ulEl.innerHTML
    listItems = ""
    for (let i = 0; i < leads.length; i++) {
        //listItems += '<li>' + '<a href = "' + leads[i] + '" target =  blank>' + leads[i] + ' </a>' + '</li>' //method:1
        listItems += `
        <li>
            <a target= '_blank' href= '${leads[i]}' >
            ${leads[i]}
            </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems
}