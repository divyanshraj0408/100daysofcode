// template strings/literals
const recipent = "james"
const sender = "Divyansh"

// refactor the email string to use template strings
//const email = "hey" + recipent + "How is it going?Cheers Divyansh"
// part 2 : use your sender variable instead of "Divyansh"
const email = `
hey
${recipent} 
how is going?cheers 
${sender}
    `
console.log(email)