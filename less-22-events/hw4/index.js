const searchBtn = document.querySelector(".search__btn");

function textEl(){
  const searchInput = document.querySelector('.search__input');
  console.log(searchInput.value);
}

searchBtn.addEventListener('click',textEl);

