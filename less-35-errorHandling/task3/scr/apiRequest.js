export const fetchUserData = (userName) => {
  const result = fetch(`https://api.github.com/users/${userName}`).then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Failed to load data");
    }
  );
  return result;
};

export const fetchRepositories = (url) => {
  const result = fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Failed to load data");
  });
  return result;
};
