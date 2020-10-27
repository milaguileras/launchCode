//Part A #1: Initialize variables to store the following arrays. Remember to use descriptive names.

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grain = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let vegetable = ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'];
let beverage= ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let dessert= ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi'];
let meal = 0
let pantry = [protein, grain, vegetable, beverage, dessert]
const input = require('readline-sync');

//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.

//for (i = 0; i < 6; i++ ) {
//  console.log(protein[i], grain[i], vegetable[i], beverage[i], dessert[i])
//}

while (meal < 1 || meal >6) {
  meal = Number(input.question("Please select number of meals to assemble: ")) 
  if (meal < 1 || meal > 6 || meal === NaN) {
   console.log("Select a number between 1 and 6.")
   } else {
     for(i = 0; i < meal; i++) {
    let food = console.log(`Your meal will be: ${protein[i]}, ${grain[i]}, ${vegetable[i]}, ${beverage[i]}, ${dessert[i]}`)
    if (food.includes('kale') || food.includes('more kale')) {
    console.log("Dont worry, you can have double chocolate tomorrow");
    }
  }
 }
}







//Part C #5: Using a while loop, ask the user to select the number of meals to assemble.  Validate the input to make sure it is an integer from 1 - 6.


//Skill boosts: 
// a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.
// b. Use an “array of arrays” to store the food options in a ‘pantry’.
// c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow.”