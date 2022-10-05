//Generate password
function generatePassword(lengthDataTypeNumber,upperBool,lowerBool,numberBool,specialBool) {

  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var special = "~`!@#$%^&*()_-+={}[]|;:,<.>/?";
  var numberss = "0123456789";
var combination =[]

//creates an array according to the answers 
  if (upperBool) {
      combination.push(upper)
    };
    if (lowerBool) {
      combination.push(lower)
    };
    if (specialBool) {
      combination.push(special)
    };
    if (numberBool) {
      combination.push(numberss)
    };

//Turns combination into a string
var combination = combination.join("");

//turns combinationArray back into an Array
var combinationArray = combination.split("");
console.log(combinationArray);
  var passwordFinal =[];
for (var i =0; i < lengthDataTypeNumber; i++){
 passwordFinal.push (combination[Math.floor(Math.random()*combination.length)]);
 console.log(passwordFinal);
}
return passwordFinal.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
   
  //Creating series of prompts
  var length = prompt ("What length of the password do you require? Select between 8 to 128");
  var upperCase = prompt ("Would you like to include UPPER case letters? Yes or No");
  var lowerCase = prompt ("Would you like to include lower case letters? Yes or No");
  var specialChars = prompt ("Would you like to include special case letters? Yes or No");
  var numbers = prompt ("Would you like to include Number case letters? Yes or No");
  
  //turning the answers into boolean
  var upperBool = upperCase.toLowerCase() == "yes";
  var lowerBool = lowerCase.toLowerCase() == "yes";
  var specialBool = specialChars.toLowerCase() == "yes";
  var numberBool = numbers.toLowerCase() == "yes";
  var lengthDataTypeNumber = +length

  var password = generatePassword(lengthDataTypeNumber,upperBool,lowerBool,numberBool,specialBool);

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
