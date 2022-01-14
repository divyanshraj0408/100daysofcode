let data = [{
    player: "jane",
    score: 52
}, {
    player: "mark",
    score: 41
}]

const janeBtn = document.getElementById("jane-btn")
janeBtn.addEventListener("click", function() {
    console.log(data[0].score)
})