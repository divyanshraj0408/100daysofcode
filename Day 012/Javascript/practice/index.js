const credit = 0

if (credit) {
    console.log("Lets play")
} else {
    console.log("sorry you cant play")
}
// truthy

// falsy Values:
// false
// 0
// ""
// null--> how you as a developer signalize emptiness
// undefined--> how JavaScript signalize emptiness
// NaN

console.log(Boolean("")) //false
console.log(Boolean("0")) //true
console.log(Boolean(100)) //true
console.log(Boolean(null)) //false
console.log(Boolean([0])) //true
console.log(Boolean(-0)) //false