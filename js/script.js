// Array of special characters to be included in password
var specialCharacters = [
  "@",  "%",  "+",  "\\",  "/",  "'",  "!",  "#",  "$",  "^",  "?",  ":",
  ",",  ")",  "(",  "}",  "{",  "]",  "[",  "~",  "-",  "_",  ".",
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

// useable array based upon selected character options
var useableCharacters = [];

// variable for user selected number of characters
var numChar = 0;

// Function to prompt user for password options
function getPasswordOptions() {
  // Confirm that user wants to generate a password
  let goPass = confirm("Do you wish to generate a password?");

  // if goPass then user wants a password so prompt for options.
  if (goPass) {
    // Prompt user for password options
    let numCharValid = false;
    let optValid = false;
    let optLower = false;
    let optUpper = false;
    let optNumeric = false;
    let optSpecial = false;

    // Enter number of characters. Must be >=8 and <= 128
    while (!numCharValid) {
      numChar = prompt("How many characters? (8 to 128)");
      if (numChar >= 8 && numChar <= 128) {
        numCharValid = true;
      } else {
        alert("Number of characters invalid.  It must be >= 8 and <= 128");
      }
    }

    // Select password options. at least one must be selected.
    while (!optValid) {
      optLower = confirm("Do you want to use lowercase characters?");
      optUpper = confirm("Do you want to use UPPERCASE characters?");
      optNumeric = confirm("Do you want to use numbers?");
      optSpecial = confirm("Do you want to use special characters?");
      if (!optLower && !optUpper && !optNumeric && !optSpecial) {
        alert("At least one password option must be selected!");
      } else {
        optValid = true;
      }
    }

    // build array of useable characters available for the password based upon user selection
    // add lowercase characters if selected
    if (optLower) {
      useableCharacters = useableCharacters.concat(lowerCasedCharacters,lowerCasedCharacters);
    }
    // add uppercase characters if selected
    if (optUpper) {
      useableCharacters = useableCharacters.concat(upperCasedCharacters,upperCasedCharacters);
    }
    // add numerics if selected
    if (optNumeric) {
      useableCharacters = useableCharacters.concat(numericCharacters);
    }
    // add special characters if selected
    if (optSpecial) {
      useableCharacters = useableCharacters.concat(specialCharacters);
    }
  }
}

// Function for getting a random element from an array
function getRandom() {
  // initialise local variable to hold all selected characters.
  let builtPassword = "";

  // Iterate a loop <numChar> times to select a random useable character
  for (let a = 1; a <= numChar; a++) {
    // select a random character from the useablechar array based upon it's length
    let randomCharacter = useableCharacters[Math.floor(Math.random() * useableCharacters.length)];
    // add selected character to local variable
    builtPassword += randomCharacter;
  }
  
  //
  // validation for at least one of each selected option in the final password?
  //
  
  // return local variable containing random characters
  return builtPassword;
}

// Function to generate password with user input
function generatePassword() {
  // prompt user for password options
  getPasswordOptions();

  // generate and return a random password based upon the user selected options
  // The password is "returned" so that it is correctly handled and displayed in
  // the provided code below.
  return getRandom();
}

// The following is "core" provided code

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
