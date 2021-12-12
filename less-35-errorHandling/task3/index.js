import { showSpinner, hideSpinner } from "./scr/spinner.js";

const userAvatarEl = document.querySelector(".user__avatar");
const userNameEl = document.querySelector(".user__name");
const userLocationEl = document.querySelector(".user__location");
const repoListEl = document.querySelector(".repo-list");
// https://api.github.com/users/USERNAME
// https://avatars3.githubusercontent.com/u10001

const defoultAvatar = "https://avatars3.githubusercontent.com/u10001";
userAvatarEl.src = defoultAvatar;

const fetchUserData = (userName) => {
  return fetch(`https://api.github.com/users/${userName}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Failed to load data");
  });
};

const renderUserData = (userData) => {
  const { avatar_url, name, location, repos_url } = userData;
  userAvatarEl.src = avatar_url;
  userNameEl.textContent = name;
  userLocationEl.textContent = location;
  return repos_url;
};

const fetchRepositories = (url) => {
  return fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Failed to load data");
  });
};

const renderRepos = (reposList) => {
  const repoListElem = reposList.map(({ name }) => {

    const listItemElem = document.createElement("li");
    listItemElem.classList.add("repo-list__item");
    listItemElem.textContent = name;
    return listItemElem;
  });
  repoListEl.append(...repoListElem);
};

const showUserBtnElem = document.querySelector(".name-form__btn");
const userNameInputElem = document.querySelector(".name-form__input");

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
    .catch(err =>{
      alert(err.message);
    })
    .finally(() =>{
      hideSpinner();
    })
};

showUserBtnElem.addEventListener("click", onSearchUserHandler);
