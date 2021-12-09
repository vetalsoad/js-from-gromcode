// algo
// 1.считываю данные, которые пользователь ввел
// 2.сохраняю данные на сервере
//      -при нажатии кнопки добавляю данные на API и вывожу алерт
//          и чищу инпуты
//      -делаю проверку на коректность данных, если что то не то,
//          то кнопка не работает

const baseUrl = "https://61b0bc0d3c954f001722a5fd.mockapi.io/api/v1/user";
const button = document.querySelector(".submit-button");
const emailInput = document.querySelector("#email");
const userNameInput = document.querySelector('[name="name"]');
const passwordInput = document.querySelector('[name="password"]');
const loginForm = document.querySelectorAll(".login-form");

 const isValidForm = () => {
  if(
    emailInput.reportValidity() &&
    userNameInput.reportValidity() &&
    passwordInput.reportValidity()
  ){
    button.disabled = false;
  }
};

loginForm.addEventListener("input", isValidForm);

/*  function createUser(userData) {   //add user on api
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(userData),
  });
}

 function getUserById(userId) {          //get user from api
  return fetch(`${baseUrl}/${userIdElem}`)
    .then((responce) => responce.json());
} 

const onClickHandler = () => {
  const dataUser = {
    email: `${emailInput.value}`,
    userName: `${userNameInput.value}`,
    password: `${passwordInput.value}`,
  };
  console.log(dataUser);
  createUser(dataUser);
};
button.disabled = false;
button.addEventListener('click', onClickHandler); */
