import { showSpinner, hideSpinner } from "./scr/spinner.js";
import { renderUserData, renderRepos } from "./scr/render.js";
import { fetchUserData, fetchRepositories } from "./scr/apiRequest.js";

const showUserBtnElem = document.querySelector(".name-form__btn");
const userNameInputElem = document.querySelector(".name-form__input");

const defaultUserAvatar = "https://avatars3.githubusercontent.com/u10001";

const defaultUser = {
  avatar_url: defaultUserAvatar,
  name: "",
  location: "",
};

renderUserData(defaultUser);

const onSearchUserHandler = () => {
  showSpinner();
  const userName = userNameInputElem.value;
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

showUserBtnElem.addEventListener("click", onSearchUserHandler);
