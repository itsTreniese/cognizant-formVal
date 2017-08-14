
//form focus function
window.onload = function(){
  document.getElementsByName('userid').focus();
}

function firstfocus(){
  var userName = document.getElementsByName('userid');
console.log(userName);

  if (!userName.value || userName.value == ''){
    console.log('Please Enter Your User Name.');
  } else {
    userName.style.borderColor = "red";
    console.log('Your username is invalid')
  }
}

function passId() {
  var password = document.getElementsByName('passid');
console.log(password);

  if (!password.value || password.value == ''){
    console.log('User password should not be empty!')
  } else {
    console.log('Your password is invalid.')
  }
}

function allLetter(){
  //console.log('all letter function works');
  var letAZ = /^[A-Za-z]+$/;
  var userInput = document.getElementsByName('username').value;
  if (!userInput === letAZ) {
    console.log('User\’s name should have alphabet characters only!');
  } else {
    console.log('User\'s name is invalid!');
  }
}

function validateEmail() {
  var userEmail = document.getElementsByName('email').value;
  var emailAZ = 
  if (!userEmail === )
}
