const bttn = document.querySelector('.single-use-btn');
function conText (){
  console.log('clicked');
  bttn.removeEventListener("click", conText);
}


bttn.addEventListener('click',conText);
/* bttn.removeEventListener("click", conText); */
