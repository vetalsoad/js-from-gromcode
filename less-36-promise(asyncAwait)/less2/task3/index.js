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

const onSearchUserHandler = async () => {
  showSpinner();
  const userName = userNameInputElem.value;
  try {
    const userData = await fetchUserData(userName);
    renderUserData(userData);
    const reposList = await fetchRepositories(userData.repos_url);
    renderRepos(reposList);
  } catch (err) {
    alert(err.message);
  } finally {
    hideSpinner();
  }
};

showUserBtnElem.addEventListener("click", onSearchUserHandler);
