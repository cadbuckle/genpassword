// Array of special characters to be included in password
var specialCharacters = [
  "@",  "%",  "+",  "\\",  "/",  "'",  "!",  "#",  "$",  "^",  "?",
  ":",  ",",  ")",  "(",  "}",  "{",  "]",  "[",  "~",  "-",  "_",  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",  "b",  "c",  "d",  "e",  "f",  "g",  "h",  "i",  "j",  "k",  "l",  "m",
  "n",  "o",  "p",  "q",  "r",  "s",  "t",  "u",  "v",  "w",  "x",  "y",  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",  "B",  "C",  "D",  "E",  "F",  "G",  "H",  "I",  "J",  "K",  "L",  "M",
  "N",  "O",  "P",  "Q",  "R",  "S",  "T",  "U",  "V",  "W",  "X",  "Y",  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
//    Prompt Length of password
//      At least 8 characters but no more than 128.
//    Prompt Character types
//      Lowercase y/n
//      Uppercase y/n
//      Numeric y/n
//      Special characters ($@%&*, etc) y/n
//    Code should validate for each input and at least one character type should be selected
let goPass = confirm("Do you wish to generate a password?");
if (goPass) {
  // Prompt user for password options
  let numChar = 0;
  let numCharValid = false;
  let optValid = false;
  let optLower = false;
  let optUpper = false;
  let optNumeric = false;
  let optSpecial = false;

  // Enter number of characters. Must be >=8 and <= 128
  while (!numCharValid) {
    numChar = prompt("How many characters? (8 to 128)");
    if (numChar >=8 && numChar <=128){
      numCharValid = true;
    } else {
      alert("Number of characters invalid.  It must be >= 8 and <= 128");
    }
  }

  // Select password options. at least one must be selected.
  while (!optValid){
    optLower = confirm("Do you want to use lowercase characters?");
    optUpper = confirm("Do you want to use UPPERCASE characters?");
    optNumeric = confirm("Do you want to use numbers?");
    optSpecial = confirm("Do you want to use special characters?");
    if (!optLower && !optUpper && !optNumeric && !optSpecial){
      alert("At least one password option must be selected!");
    } else {
      optValid = true;
    }
  }
  console.log("NumChar: "+numChar);
  console.log("Lower? "+optLower);
  console.log("Upper? "+optUpper);
  console.log("Number? "+optNumeric);
  console.log("Special? "+optSpecial);

}

}

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Generate a password when the "button" is clicked.
// First present a series of prompts for password criteria
// Once prompts are answered then the password should be generated and displayed in an alert or written to the page

// Not produce any errors in the console when you inspect it using Chrome DevTools.