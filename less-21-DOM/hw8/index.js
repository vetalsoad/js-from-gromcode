
  function finishList(){
    const ul = document.querySelector("ul");
    const special = document.querySelector(".special");

  const liOne = document.createElement("li");
  liOne.textContent = 1;  
  ul.prepend(liOne);

  const liFour = document.createElement("li");
  liFour.textContent = 4;
  special.before(liFour);

  const liSix = document.createElement("li");
  liSix.textContent = 6;
  special.after(liSix);

  const liEight = document.createElement("li");
  liEight.textContent = 8;
  ul.append(liEight);
}
finishList();
