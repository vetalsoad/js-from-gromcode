const textInput = document.querySelector('.text-input');
const memory = () => console.log(textInput.value);

textInput.addEventListener('change', memory);