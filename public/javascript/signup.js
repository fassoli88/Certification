function check(){
  let password = document.querySelector("#password").value;
  let confirm_password = document.querySelector('#confpassword').value;

  if( password === confirm_password) {
    document.querySelector('form').setAttribute("method", "POST").setAttribute("action", "/signup");
  } else {
    alert("Passwords Don't Match");
  }  
}

function listen(){
  document.querySelector('form').addEventListener('submit', check);
}

document.addEventListener('DOMContentLoaded', listen);