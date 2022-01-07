let person = {
    name: "Divyansh",
    age: 17,
    country: "India"
}

function logData() {
    let greeting = person.name + " is " + person.age + " years old and lives in " + person.country
    console.log(greeting)
}
logData()