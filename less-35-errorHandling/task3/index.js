import {
  renderUserData,
  renderRepos,
  clearList,
} from "./src/render.js";
import { showSpinner, hideSpinner } from "./src/spinner.js";
import { fetchUserData, fetchRepositories } from "./src/apiRequests.js";

const defaultUserAvatar = "https://avatars3.githubusercontent.com/u10001";
const defaultUser = {
  avatar_url: defaultUserAvatar,
  name: "",
  location: "",
};
const userNameInput = document.querySelector(".name-form__input");
const showUserBtnElem = document.querySelector(".name-form__btn");

renderUserData(defaultUser);

const onSearchUser = () => {
  showSpinner();
  const userName = userNameInput.value;
  fetchUserData(userName)
    .then((userData) => {
      renderUserData(userData);
      return userData.repos_url;
    })
    .then((url) => fetchRepositories(url))
    .then((reposList) => {
      renderRepos(reposList);
      hideSpinner();
    })
    .catch((err) => {
      alert(err.message);
    })
    .finally(() => {
      hideSpinner();
    });
};

showUserBtnElem.addEventListener("click", onSearchUser);

const showUserBtnElem = document.querySelector(".name-form__btn");
const userNameInputElem = document.querySelector(".name-form__input");

const onSearchUser = () => {
  const userName = userNameInputElem.value;

  fetchUserData(userName)
    .then((userData) => {
      renderUserData(userData);
      console.log(userData.repos_url);
      return userData.repos_url;
    })
    .then((url) => renderRepos(url));
};

showUserBtnElem.addEventListener("click", onSearchUser);
