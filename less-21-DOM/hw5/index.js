/* function setButton(buttonText) {
  const button = `<button>${buttonText}</button>`;
  document.querySelector("body").textContent = button;
}

setButton('www'); */

function setButton(buttonText) {
  const button = document.createElement("button");
  button.innerHTML = buttonText;
  document.querySelector("body").append(button);
}

setButton("derec");