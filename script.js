var numbers = "1234567890"
var symbols = "!@#%?*"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = uppercase.toLowerCase()
var characterchoices = ""
var endingPassword = ""

function generatePassword (){
  var passwordLength = prompt("How long would you like the password?")
  var confirmNum = confirm("Do you want numbers in your password?")
  var confirmSym = confirm("Do you want symbols in your password?")
  var confirmUpper = confirm("Do you want uppercase letters in your password?")
  var confirmLow = confirm("Do you want lowercase letters in your password?")
if (confirmNum === true) {
  characterchoices += numbers 
}
if (confirmSym === true) {
  characterchoices += symbols
}
if (confirmUpper === true) {
  characterchoices += uppercase
}
if (confirmLow === true) {
  characterchoices += lowercase
}

if (!confirmNum && !confirmLow && !confirmSym && !confirmUpper) {
  alert("You must make a choice!")
}

for (var i =0;i<passwordLength; i++){
var randomizedCharacter = Math.floor(Math.random()*characterchoices.length)
 endingPassword += characterchoices.charAt(randomizedCharacter)
}
return endingPassword

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
