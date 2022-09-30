// Assignment code here

function generatePassword() {
  var criteria = function criteria() {
    var box = document.createElement("INPUT");                    //Variable LS
    box.setAttribute("type","checkbox");
    box.setAttribute("id","accept");
    document.body.appendChild(box);
  };
  prompt(criteria);
  console.log("Generate Password function is working");
}

// Get references to the #generate element
var generateBtn = document.getElementById("generate");          //Variable GS

// Defining the checkbox element
function checkbox () {

  console.log("Checkbox function is being called");
};

// Write password to the #password input
function writePassword() {
  checkbox();
  var password = generatePassword();                            //Variable LS
  var passwordText = document.getElementById("password");
  passwordText.innerHTML = password();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
