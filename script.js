
function firstfocus(){
  var userName = document.getElementsByName('userid')[0];
  userName.focus();
console.log(userName);
}

function userid_validation(num1,num2){
    var userName = document.getElementsByName('userid')[0].value;
  if (!userName || userName == ''){
    console.log('Please Enter Your User Name.');
  }
  
  if (userName => 5 || userName <= 12) {
      console.log("Your User name is accepted!")
  }
}

function passId() {
    var password = document.getElementsByName('passid')[0];
    password.focus();
  console.log(password);
}


function passid_validation(num1,num2) {
    var password = document.getElementsByName('passid')[0];
  if (!password.value || password.value == ''){
    console.log('User password should not be empty!')
  } else {
    console.log('Your password is invalid.')
  }
}



function allLetter(){
  //console.log('all letter function works');
  var letAZ = /^[A-Za-z]+$/;
  var userInput = document.getElementsByName('username')[0].value;
  if (!userInput === letAZ) {
    console.log('User\’s name should have alphabet characters only!');
  } else {
    console.log('User\'s name is invalid!');
  }
}

// function validateEmail() {
//   var userEmail = document.getElementsByName('email').value;
//   var emailAZ =
//   if (!userEmail === )
// }
