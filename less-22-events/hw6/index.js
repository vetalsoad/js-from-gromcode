const btns = document.querySelectorAll('.btn');

function handleClick(event){
  console.log(event.target.textContent);
}




btns[0].addEventListener('click', handleClick);
btns[1].addEventListener("click", handleClick);