const welcomeEl = document.getElementById("welcome-el")
    ///            parameters: inside the function
function greetUser(greting, name, emoji) {
    welcomeEl.textContent = `${greting}, ${name}${emoji}`
}
//         arguments: outside of the function
greetUser("welcome back ", "divyansh", "🐒")

function add(num1, num2) {
    return num1 + num2
}

console.log(add(3, 4))
console.log(add(9, 103))