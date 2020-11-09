function launchOutput(num){
let output = ""
let text = ['Launch', 'Code', ' Rocks', 'Rocks']

  if(num % 2 === 0) {
    output += text[0]
    
} if(num % 3 === 0) {
  output += text[1]

} if(num % 5 ===0) {
  if(output) {
    output += text[2];
  }else {
    output += text[3]
  }
} if (num % 5 !== 0 && num % 3 !== 0 && num %2 !==0){
  output += "Rutabagas! That doesn't work"
} return output += '!'

}
module.exports = launchOutput;

