// My Global Arrays
var lowerAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't' ,'u', 'v', 'w', 'x', 'y', 'z'];
var upperAlpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialChar = [" ", "!", `"`, "#", "$", "%", "&", `'`, "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Take in data from user
  var quantity = prompt("Enter your desired password length (8-128): ");
  // if quantity is not a number restart
  if (isNaN(quantity)) {
    alert("Password must be a number");
    writePassword();
  }
  // if quantity is outside our range restart
  if (quantity < 8 || quantity > 128) {
    alert("Password length must be within the range of 8-128");
    writePassword();
  }
  // take in data for password character type criteria
  var includeLow = confirm("Include Lowercase Characters? (ok for yes, cancel for no)");
  var includeUp = confirm("Include Uppercase Characters? (ok for yes, cancel for no)");
  var includeNum = confirm("Include Numeric Characters? (ok for yes, cancel for no)");
  var includeSpec = confirm("Include Special Characters? (ok for yes, cancel for no)");

  // if all false, restart
  if (!includeLow && !includeUp && !includeNum && !includeSpec) {
    alert("You must accept at least one of the character criteria, please start again.");
    writePassword();
  }

  // Plug values into generatePassword to create password message
  var password = generatePassword(quantity, includeLow, includeUp, includeNum, includeSpec);
  // return the password message into the box
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password Generation functions
var generatePassword = (length, lowercase, uppercase, numeric, special) => {
  var result = [];
  var validChars = [];
  // Adds a lowercase character if lowercase option is true
  if (lowercase) {
    result.push(lowerAlpha[Math.floor(Math.random() * lowerAlpha.length)]);
    validChars = validChars.concat(lowerAlpha);
  }
  // Adds an uppercase character if uppercase option is true
  if (uppercase) {
    result.push(upperAlpha[Math.floor(Math.random() * upperAlpha.length)]);
    validChars = validChars.concat(upperAlpha);
  }
  // Adds a number if the number option is true
  if (numeric) {
    result.push(nums[Math.floor(Math.random() * nums.length)]);
    validChars = validChars.concat(nums);
  }
  // Adds a special character if the special character option is true
  if (special) {
    result.push(specialChar[Math.floor(Math.random() * specialChar.length)]);
    validChars = validChars.concat(specialChar);
  }
  // Populate the array with random characters from all available characters within the remaining length
  for (var i = result.length; i < length; i++) {
    result.push(validChars[Math.floor(Math.random() * validChars.length)]);
  }
  // Shuffle the Array
  result.sort(() => Math.random() - 0.5);

  // Turn the array into a string
  var password = result.join('');
  var message = `Your password is: \n${password}`;
  // Return the generated password
  return message;
}