
function firstfocus(){
  var userName = document.getElementsByName('userid')[0];
  userName.focus();
console.log(userName);
}

function userid_validation(num1,num2){
    var userName = document.getElementsByName('userid').value;

  if (!userName || userName == ''){
    console.log('User ID should not be empty!');
  }

  if (userName >= 5 && userName <= 12) {
      console.log("Your User name is accepted!");
      return true;
  }


}

function passId() {
    var password = document.getElementsByName('passid')[0];
    password.focus();
  console.log(password);
}


function passid_validation(num1,num2) {
    var password = document.getElementsByName('passid')[0].value;
  if (password == ''){
    console.log('User password should not be empty!')
  } else if (password >= 7 && password <= 12) {
        console.log("Your password is accepted!");
        return true;
    }
}



function allLetter(){
  //console.log('all letter function works');
  var letAZ = /^[A-Za-z]+$/;
  var userInput = document.getElementsByName('username')[0].value;
  if (userInput === !letAZ) {
    console.log('User\’s name should have alphabet characters only!');
  } else if (userInput == ''){
    console.log('User\'s name is invalid!');
  }
}

function validateEmail() {
   var userEmail = document.getElementsByName('email')[0].value;
   console.log(userEmail);
   var elength = userEmail.length;
   var dot = userEmail.indexOf('.');
   var atSym = userEmail.indexOf('@');

  if (userEmail == ''){
    console.log('Please enter your email.');
    return false;
  } else if (dot >= 2 && atSym =< elength - 2) {
    console.log('Email accepted');
  } else {
    console.log('You have entered an invalid email format!');
  }

 }
