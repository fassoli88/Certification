function check(){
  let password = document.querySelector("#password").value;
  let confirm_password = document.querySelector('#confpassword').value;
  
  if( password != confirm_password) {
    alert("Passwords Don't Match");
    document.querySelector('form').setAttribute("method", "GET").setAttribute("action", "/signup");
  } else {
    document.querySelector('form').setAttribute("method", "POST").setAttribute("action", "/signup");
  }
}

function listen(){
  document.querySelector('form').addEventListener('submit', check);
}

document.addEventListener('DOMContentLoaded', listen);