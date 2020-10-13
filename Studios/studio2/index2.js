let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";
let stringAlt = ""
let arr = []


//a) Use the 'includes' method to check to see if the words in each string are separated by commas (,), semicolons (;) or just spaces.

//b) If the string uses commas to separate the words, split it into an array, reverse the entries, and then join the array into a new comma separated string.

//c) If the string uses semicolons to separate the words, split it into an array, alphabetize the entries, and then join the array into a new comma separated string.

//d) If the string uses spaces to separate the words, split it into an array, reverse alphabetize the entries, and then join the array into a new space separated string.

//e) If the string uses ‘comma spaces’ to separate the list, modify your code to produce the same result as part “b”, making sure that the extra spaces are NOT part of the final string.

if (protoArray4.includes(",")) { 
  //stringAlt =(protoArray1.split(",").reverse().join(',')); 

  //convert string to array
  arr = protoArray4.split(',');
  //reverse the array
  arr.reverse();
  //re-joining with a comma and turning it back to a string
  stringAlt = arr.join(',');
} else if (protoArray4.includes(";")) {
  //convert string to array
  arr = protoArray4.split(";");
  //sorts the array by alphabetical order
  arr.sort();
  //converts array back to string
  arr.join(",");
} else if (protoArray4.includes(" ")) {
  //converts string to arrray
  arr = protoArray4.split(" ");
  //alphabetize and reverse the array
  arr.sort( ).reverse( );
  //converts array back to string
  arr.join(" ");
} else (protoArray4.includes(", ")) 
  arr = protoArray4.split(", ");
  arr.reverse();
  arr.join(",");
