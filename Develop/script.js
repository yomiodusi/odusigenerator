// Assignment code here

var passwordLength = 5;
var possiblePassword = [];

var specialCharOptions = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];
var numberOptions = ['0','1','2','3','4','5','6','7','8','9'];
var lowerCaseOptions = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseOptions = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // 1. Prompt the user for the password criteria

  possiblePassword = [];

  var passwordLength = parseInt(prompt("How many characters would you like your password to contain. Must be between 8 to 128"));
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    window.alert("Please try again. Password Length must be between 8 to 128 characters")
    return false;
  }

  if (confirm("Do you want to include special characters")) {
    possiblePassword = possiblePassword.concat(specialCharOptions);
  }

  if (confirm("Do you want to include include numbers")) {
    possiblePassword = possiblePassword.concat(numberOptions);
  }

  if (confirm("Do you want to include uppercase character")) {
    possiblePassword = possiblePassword.concat(upperCaseOptions);
  }

  if (confirm("Do you want to include lowercase characters")) {
    possiblePassword = possiblePassword.concat(lowerCaseOptions);
  }
  console.log("You Clicked")

  return true;
}









