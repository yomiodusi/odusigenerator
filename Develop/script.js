// Assignment code here
function generatePassword() {
  console.log("You Clicked")

  var passLength=prompt("How many characters would you like your password to contain. Must be between 8 to 28");
  if (passLength < 8 || passLength > 128) {
    window.alert("Please try again. Password Length must contain numbers from 8 to 128")
  }

  var special=prompt("Do you want to include special characters");
  var upperCase=prompt("Do you want to include uppercase characters");
  var lowerCase=prompt("Do you want to include lowercase characters");

  // 1. Prompt the user for the password criteria
  //  a. Password Length between 8 < 28
  //  b. lowercase, uppercase, numberss and special characters
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
