const baseUrl = "https://61b0a1963c954f001722a519.mockapi.io/api/v1/users";

function getUsersList() {

  return fetch(baseUrl)
  .then(response => response.json());
}


function getUserById(userId) {

  return  fetch(`${baseUrl}/${userId}`)
  .then(responce => responce.json());  
}

function deleteUser(userId) {

  return fetch(`${baseUrl}/${userId}`,{
  method: 'DELETE',
    });
}



function createUser(userData) {

  return fetch(baseUrl,{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8'},
  body: JSON.stringify(userData),
  });
}


function updateUser(userId, userData) {
  return fetch(`${baseUrl}/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(userData),
  });
}

// examples

/* getUsersList().then(users => {
  console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
});

getUserById("1").then((userData) => {
  console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
});

deleteUser("2").then(() => {
  console.log("User updated");
});

const newUserData = {
  email: "cool@email.com",
  firstName: "Iron",
  lastName: "Man",
  age: 42,
};

createUser(newUserData).then(() => {
  console.log("User created");
});

const updatedUserData = {
  email: "new@email.com",
  firstName: "John",
  lastName: "Doe",
  age: 17,
};

updateUser("1", updatedUserData).then(() => {
  console.log("User updated");
}); */
