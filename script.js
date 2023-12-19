// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to prompt user for password options
function getPasswordOptions() {
  console.log

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  console.log("Clicked button below");

  // Ask for User Input

  var passwordLength = parseInt(prompt("How many characters would you like your password to remain?"))

  console.log(passwordLength)

  if (passwordLength < 8 || passwordLength > 128) {
    console.log("Password must be greater or equals to 8 but less than or equals to 128");
    return "Invalid password length!"
  }

  var wantLowercase = confirm("Do you want lowercase characters?");
  var wantUppercase = confirm("Do you want uppercase characters?");
  var wantNumaricCharacter = confirm("Do you want NumaricCharacters?");
  var wantSpecialChracter = confirm("Do you want SpecialChracters?");


  // prepare the set of characters
  var myBasket = [];

  if (wantLowercase == true) {
    myBasket = myBasket.concat(lowerCasedCharacters)
  }

  if (wantUppercase == true) {
    myBasket = myBasket.concat(upperCasedCharacters)
  }

  if (wantNumaricCharacter == true) {
    myBasket = myBasket.concat(numericCharacters)
  }

  if (wantSpecialChracter == true) {
    myBasket = myBasket.concat(specialCharacters)
  }

  console.log(myBasket)


  // generate the password by grabbing random characters from the basket
  var myPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomCharacter = myBasket[Math.floor(Math.random() * myBasket.length)]

    console.log(randomCharacter)
    myPassword = myPassword + randomCharacter
  }
  return myPassword;

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);