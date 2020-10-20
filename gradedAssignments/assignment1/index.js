//initiates all variables
const input = require('readline-sync');
let questions = [
  '1) Who was the first American woman in space? ',
  '2) Given the array [8, "Orbit", "Trajectory",45], what entry is at index 2? ',
  '3) (5 + 3)/2 * 10 = ?',
  '4) True or false: 5000 meters = 5 kilometers. ',
  '5) What is the minimum crew size for the International Space Station (ISS)? '
];
let answers = []
let correctAnswers = ["sally ride", "trajectory", "40", "true", "3"]
let score = 0

//Requests name and stores it in "name" variable
let name = input.question("Candidate Name: ")
//loops through the 5 questions 
for (let i = 0; i < questions.length; i++) {
//stores the answer in "answers" array
 answers.push(input.question(questions[i]))
 /*compares answer given and correct answer, transforming it all to lower case to avoid case error, and tallies the score*/
 if(answers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
   score++;}
//gives feedback
  console.log(`Your Answer: ${answers[i]}
Correct Answer: ${correctAnswers[i]}\n`)
}
////prints the overall grade and score status
console.log(`>>> Overall Grade: ${(score/5*100)}% (${score} out of 5 responses correct) <<<`)
if (score/5*100 >= 80){
  console.log(">>> Status: PASSED <<<")
}else {
  console.log(" >>>Status: FAILED <<<")
}