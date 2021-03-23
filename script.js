// My Global Arrays
var lowerAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't' ,'u', 'v', 'w', 'x', 'y', 'z'];
var upperAlpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialChar = [" ", "!", `"`, "#", "$", "%", "&", `'`, "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  alert(`Your password is: ${password}`);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password Generation functions
var generatePassword = (length, lowercase, uppercase, numeric, special) => {
  var result = '';
  var validChars = [];
  // Return error message if length doesn't meet criteria
  if (length < 8 || length > 128) {
    return "Invalid password length selection. Please try again.";
  }
  // Return error message if all values are false
  if (!lowercase && !uppercase && !numeric && !special) {
    return "Password failed to compile. Please check the boxes for password character criteria.";
  }
  // Adds a lowercase character if lowercase option is checked
  if (lowercase) {
    result = result + lowerAlpha[Math.floor(Math.random())*lowerAlpha.length];
    validChars.concat(lowerAlpha);
  }
  // Adds an uppercase character if uppercase option is checked
  if (uppercase) {
    result = result + upperAlpha[Math.floor(Math.random())*upperAlpha.length];
    validChars.concat(upperAlpha);
  }
  // Adds a number if the number option is checked
  if (numeric) {
    result = result + nums[Math.floor(Math.random())*nums.length];
    validChars.concat(nums);
  }
  // Adds a special character if the special character option is checked
  if (special) {
    result = result + specialChar[Math.floor(Math.random())*specialChar.length];
    validChars.concat(specialChar);
  }
  return "Hello, World!";
}