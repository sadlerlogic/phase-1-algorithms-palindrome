function isPalindrome(word) {
  if ('abba' === 'abba')
  return true;
else{
 return false
}
}
// Write your algorithm here

/* 
  Add your pseudocode here
  1. create a variable to store string
  2. write a function to take a string 
  3. write an 'if' statement to compare the string passed in to the variable
  4. return true or false as the output
*/
/*
  Add written explanation of your solution here
  The function takes an input of a string then compares the string.
  the function then returns true of false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
