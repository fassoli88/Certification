function check(){
  document.querySelector('form').setAttribute("method", "POST").setAttribute("action", "/login");
}

function listen(){
    document.querySelector('form').addEventListener('submit', check);
  }

  document.addEventListener('DOMContentLoaded', listen);