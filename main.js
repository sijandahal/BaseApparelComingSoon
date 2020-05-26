const button = document.getElementById('btn');
const error = document.getElementById('error');
const message = document.getElementById('message');
const input = document.getElementById('text');



button.addEventListener('click', alertMessage)


function alertMessage(){
  if(input.value == "") {
    error.style.display = "block";
    message.style.display = "block"
  }
  else {
   error.style.display = "none";
  }
}