// algo
// 1.считываю данные, которые пользователь ввел
// 2.сохраняю данные на сервере
//      -при нажатии кнопки добавляю данные на API и вывожу алерт
//          и чищу инпуты
//      -делаю проверку на коректность данных, если что то не то,
//          то кнопка не работает

const baseUrl = "https://61b0bc0d3c954f001722a5fd.mockapi.io/api/v1/user";
const emailField = document.querySelector("#email");
const userNameField = document.querySelector("#name");
const passwordField = document.querySelector("#password");

const submitButton = document.querySelector(".submit-button");
const formElement = document.querySelector(".login-form");
const errorElement = document.querySelector(".error-text");

const isValidForm = () => {
  
  if (
    emailField.reportValidity() &&
    passwordField.reportValidity() &&
    userNameField.reportValidity()
  ) {
    submitButton.disabled = false;
  }
  errorElement.textContent = "";
};

const sendData = (formData) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(formData),
  });

const submitData = (event) => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(formElement));
  console.log(formData);
  sendData(formData)
    .then((response) => response.json())
    .then((userData) => {
      alert(JSON.stringify(userData));
      formElement.reset();
      submitButton.disabled = true;
    })
    .catch(() => {
      errorElement.textContent = "Failed to create user";
    });
};

formElement.addEventListener("submit", submitData);
formElement.addEventListener("input", isValidForm);