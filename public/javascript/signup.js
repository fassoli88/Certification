function check(){
  let password = document.querySelector("#password").value;
  let confirm_password = document.querySelector('#confpassword').value;
  
  if( password != confirm_password) {
    alert("Passwords Don't Match");
  } else {
    alert('done');
  }
}

function listen(){
  document.querySelector('form').addEventListener('submit', check);
}

document.addEventListener('DOMContentLoaded', listen);