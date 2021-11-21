const textInput = document.querySelector(".text-input");

function handling(event){
  console.log(event.target.value);
}



textInput.addEventListener('change', handling);