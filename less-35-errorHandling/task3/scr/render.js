const userAvatarEl = document.querySelector(".user__avatar");
const userNameEl = document.querySelector(".user__name");
const userLocationEl = document.querySelector(".user__location");
const repoListEl = document.querySelector(".repo-list");

const defoultAvatar = "https://avatars3.githubusercontent.com/u10001";
userAvatarEl.src = defoultAvatar;

export const renderUserData = (userData) => {
  const { avatar_url, name, location, repos_url } = userData;
  userAvatarEl.src = avatar_url;
  userNameEl.textContent = name;
  userLocationEl.textContent = location;
  return repos_url;
};

export const renderRepos = (reposList) => {
  repoListEl.innerHTML = "";
  const repoListElem = reposList.map(({ name }) => {
    const listItemElem = document.createElement("li");
    listItemElem.classList.add("repo-list__item");
    listItemElem.textContent = name;
    return listItemElem;
  });
  repoListEl.append(...repoListElem);
};
