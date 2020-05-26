const form = document.getElementById('form');
const button = document.getElementById('btn');
const error = document.getElementById('error');
const message = document.getElementById('message');
const input = document.getElementById('text');



form.addEventListener('submit', function(e){
  e.preventDefault();
});



button.addEventListener('click', alertMessage);
 function alertMessage(){
  
   if(input.value == "") {
     error.style.display = "block";
     message.style.display = "block"
   }
   else  {
   error.style.display = "none";
   message.innerHTML = "Your email address is valid"
   message.style.color = "green";
   }
 }