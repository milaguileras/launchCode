//a- Remove the first three characters from a string and add them to the end. Ex: 'LaunchCode' becomes 'nchCodeLau'. Use a template literal to print the original and modified string in a descriptive phrase.

let word = "Javalamp"
let num = 3

console.log(`${word} is awesome, but ${word.slice(num)}${word.slice(0,num)} is not`)

//b- Modify your code to accept user input. Query the user to enter the number of //letters that will be relocated.

const input = require(`readline-sync`)
let num2 = input.question("Pick the number of letters to be relocated: ")


//c- Add validation to your code to deal with user inputs that are longer than the //word. In such cases, default to moving 3 characters. Also, the template literal //should note the error.

//if (num2 > word.length) {
//  console.log(`Pick a number lower than ${(word.length)}`)
//}
if (num2 > word.length) {
  console.log(`ERROR: Number picked is greater than word length. ${word} is awesome, but ${word.slice(num)}${word.slice(0,num)} is not`)
} else { 
  console.log(`${word} is awesome, but ${word.slice(num2)}${word.slice(0,num2)} is not`)
}