// algo
// 1. пишу обработчик событий для кнопки:
//          -при клике на кнопку, отображаю данные на странице
//
//
//
//
//
//
//
//
//
const userAvatarElem = document.querySelector(".user__avatar");
const userNameElem = document.querySelector(".user__name");
const userLocationElem = document.querySelector(".user__location");
const repoListData = document.querySelector(".repo-list");

const linkDataURL = 'https://api.github.com/users';
/* const linkRepoListDataURL = ''; */



const defaultAvatar = "https://avatars3.githubusercontent.com/u10001";

userAvatarElem.src = defaultAvatar;

const fetchUserData = userName => {
  return fetch(`${linkDataURL}/${userName}`)
    .then(responce => responce.json())
}

const renderUserData = userData => {
  console.log(userData);
  const {avatar_url, name, location, repos_url} = userData;
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location;
  /* linkRepoListDataURL = repos_url; */
  
}
 
const showUserBtnElem = document.querySelector(".name-form__btn");
const userNameInputElem = document.querySelector(".name-form__input");

const onSearchUser = () => {
  const userName = userNameInputElem.value;
  fetchUserData(userName)
    .then(userData => renderUserData(userData));
};


showUserBtnElem.addEventListener('click', onSearchUser);
