let sentence = ["Hello", "my", "name", "is", "Divyansh"]
let greetingEl = document.getElementById("greeting-el")
    //Render the sentence in the greetingEl paragraph using a for loop and .textContent 
for (let i = 0; i < sentence.length; i++) {
    sentence[i] += " "
    greetingEl.textContent += sentence[i]

}