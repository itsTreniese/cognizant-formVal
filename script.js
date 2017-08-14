
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
  var password = document.getElementsByName('passid').value;
console.log(password);
  if (!password){
    console.log("Please Enter Your Password.")
  }
}
