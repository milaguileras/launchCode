// Refer to the online book to access detailed instructions for this project.

// URL = https://education.launchcode.org/intro-to-professional-web-dev/assignments/scrabble-scorer.html

// Code your transform function here:
const input = require('readline-sync'); 

// Code your initialPrompt function here:
function initialPrompt (number) {

  console.log("Welcome to the Scrabble score calculator!\n\nWhich scoring algorithm would you like to use?\n\n0 - Scrabble: The traditional scoring algorithm.\n1 - Simple Score: Each letter is worth 1 point.\n2 - Bonus Vowels: Vowels are worth 3 pts, and consonants are 1 pt.\n")
  //requests input, saves it into a variable and returns it. 
  number = input.question('Enter 0, 1, or 2: ')

return Number(number)
} 

// Code your runProgram function here:


// Here is the oldPointStructure object:
const oldPointStructure = {
   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
   2: ['D', 'G'],
   3: ['B', 'C', 'M', 'P'],
   4: ['F', 'H', 'V', 'W', 'Y'],
   5: ['K'],
   8: ['J', 'X'],
   10: ['Q', 'Z']
};

// Use the transform function to create the newPointStructure object here:
  let newPointStructure = {}

function transform (object){
  for (key in object){
    for (let i = 0; i < object[key].length; i++) {
    newPointStructure[object[key][i].toLowerCase()] = Number(key)
    
  }
} return newPointStructure
}

newPointStructure[' '] = 0 


//console.log(newPointStructure)

newPointStructure = transform(oldPointStructure)
// Create your scoringAlgorithms array here:



const simpleScore = {

'name': 'Simple Score',
'description': 'The traditional scoring algorithm.',
'scoreFunction' : function(word) {
  let score = 0
  for (let i of word.toLowerCase()){
    score ++
  } return score
}
}


const bonusVowels = {

'name': 'Bonus Vowels',
'description': '	Vowels are 3 pts, consonants are 1 pt.',
'scoreFunction' :
function(word){
  let score = 0
  let vowel = ['a', 'e', 'i', 'o', 'u']

  for (let i of word.toLowerCase()){
    if (vowel.includes(i)){
    score += 3;
  } else {
    score ++
    }
   } return score
}
}



const scrabble = {

'name': 'Scrabble',
'description': 'The traditional scoring algorithm.',
'scoreFunction' :
function(word, object){
  let score = 0
  object = newPointStructure
  word = word.toLowerCase()

  for (let i = 0; i < word.length; i++){
      score += object[word[i]]
  

  }return score
}
}


const scoringAlgorithms = [scrabble, simpleScore, bonusVowels]



// Call the runProgram function here:


function start(selection){  
  let getWord = ''

  console.log(`\nUsing algorithm: ${scoringAlgorithms[selection].name}\n`)

  while (getWord.toLowerCase() !== 'stop' ){
    
    getWord = input.question("Enter a word to be scored, or 'Stop' to quit: ")
    if (getWord.toLowerCase() === 'stop'){
      console.log('\nThank you for playing!')
      break;
    } else {
      console.log(`Score for '${getWord}': ${scoringAlgorithms[selection].scoreFunction(getWord)}\n`)
   }
 }
}


function runProgram(){ 
let selection = initialPrompt()

if (selection === 1 || selection === 2){
  start(selection)   
  }else {
    start(0) 
  }
}





runProgram()
