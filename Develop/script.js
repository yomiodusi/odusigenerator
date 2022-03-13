var actualPassword = 8;
var possiblePassword = [];

var specialCharOptions = [];
var numberOptions = ['0','1','2','3','4','5','6','7','8','9'];
var upperCaseOptions = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var lowerCaseOptions = [];

// Assignment code here
function generatePassword() {
  console.log("You Clicked")

  // 1. Prompt the user for the password criteria

  var passLength=prompt("How many characters would you like your password to contain. Must be between 8 to 128");
  if (passLength < 8 || passLength > 128) {
    window.alert("Please try again. Password Length must be between 8 to 128 characters")
    generatePassword();
  }

  
  confirm ("Do you want to include special characters")

  confirm ("Do you want to include numbers")

  confirm ("Do you want to include uppercase characters")

  confirm ("Do you want to include lowercase characters")
  
  var upperCase
  var lowerCase

  // 1. Prompt the user for the password criteria

  //  b. lowercase, uppercase, numbers and special characters
  // 2. Validate the input
  // 3. Generate Password Based on Criteria
  
  // 4. Display Password to the page.
  return "Generated Password will go here!"
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
