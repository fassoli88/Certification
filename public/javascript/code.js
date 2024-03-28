/*var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
*/
function ccna(){

    if (this.checked) {
        document.querySelector('input[name=network]').checked = false;
      }
      else{
        document.querySelector('input[name= ccna]').checked = false;
      }
}
function network(){

  if (this.checked) {
    document.querySelector('input[name=ccna]').checked = false;
  }
  else{
    document.querySelector('input[name= networ]').checked = false;
  }
}

function pentest(){

  if (this.checked) {
    document.querySelector('input[name=ejpt]').checked = false;
  }
  else{
    document.querySelector('input[name= pentest]').checked = false;
  }
}
function ejpt(){

  if (this.checked) {
    document.querySelector('input[name=pentest]').checked = false;
  }
  else{
    document.querySelector('input[name= ejpt]').checked = false;
  }
}
  

function listen(){
    
    document.querySelector('input[name=ccna]').addEventListener('change',ccna);
    document.querySelector('input[name=network]').addEventListener('change',network);
    document.querySelector('input[name=pentest]').addEventListener('change',pentest);
    document.querySelector('input[name=ejpt]').addEventListener('change',ejpt);
  
}


document.addEventListener('DOMContentLoaded', listen);