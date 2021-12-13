const getUser = async userID => {
  try {
    const response = await fetch(`https://api.github.com/users/${userID}`);
    if (!response.ok) {
      return null;
    }
    const userData = await response.json();
    return userData;
  } catch (err) {
    throw new Error('Failed to fetch user');
  }
};

getUser('facebook')
  .then(userData => console.log(userData))
  .catch(err => alert(err.message));