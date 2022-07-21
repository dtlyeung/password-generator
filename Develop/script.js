// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables
var numbers;
var lower;
var upper;
var special;
var choice;
                           
// Characters
upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
special = ["!","@","#","$","%","^","&","*","(",")","-","+",];


// Write password to the #password input
function writePassword() {
 
  // User Input (Password Length between 8 and 128 characters)
  input = parseInt(window.prompt("How long would you like the password to be? Please choose between 8 to 128 characters."));
  
  if (input < 8 || input > 128){
    input = parseInt(window.prompt("The password should between 8 and 128 characters. Please try again."));
  }

  // User has chosen a password length - Choose characters
  else {
    confirmnumbers = confirm("Should the password have numbers?");
    confirmspecial = confirm("Should the password contain special characters?");
    confirmlower = confirm("Should the password contain lowercase letters?");
    confirmupper = confirm("Should the password contain uppercase letters?");
  }

  // If user chooses 'no' to all confirms
  if (!confirmnumbers && !confirmspecial && !confirmlower && !confirmupper) {
    choice = window.alert("Please choose characters for the password.")
  }

  // User says 'yes' to all confirms
  else if (confirmnumbers && confirmspecial && confirmlower && confirmupper){
    choice = numbers.concat(upper, lower, special);
  }

  // User says 'yes' to 3 confirms
  else if (confirmnumbers && confirmspecial && confirmlower){
    choice = numbers.concat(special, lower);
  }

  else if (confirmnumbers && confirmspecial && confirmupper){
    choice = numbers.concat(special, upper);
  }

  else if (confirmnumbers && confirmupper && confirmlower){
    choice = numbers.concat(upper, lower);
  }

  else if (confirmspecial && confirmupper && confirmlower){
    choice = special.concat(upper, lower);
  }

  // User says 'yes' to 2 confirms
  else if (confirmnumbers && confirmspecial){
    choice = numbers.concat(special);
  }

  else if (confirmnumbers && confirmlower){
    choice = numbers.concat(lower);
  }

  else if (confirmnumbers && confirmupper){
    choice = numbers.concat(upper);
  }

  else if (confirmspecial && confirmlower){
    choice = special.concat(lower);
  }

  else if (confirmspecial && confirmupper){
    choice = special.concat(upper);
  }

  else if (confirmlower && confirmupper){
    choice = lower.concat(upper);
  }

  // User says 'yes' to 1 confirm
  else if (confirmnumbers){
    choice = numbers;
  }

  else if (confirmspecial){
    choice = special;
  }

  else if (confirmlower){
    choice = lower;
  }

  else if (confirmupper){
    choice = upper;
  }

// Create password based on confirmed arrays
  var password = generatePassword()
    function generatePassword(){
      for (var i = 0; i < input; i++); {
      var confirmed = choice[Math.floor(Math.random() * choice.length)];
      password.push(confirmed);
    }
  }

  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);