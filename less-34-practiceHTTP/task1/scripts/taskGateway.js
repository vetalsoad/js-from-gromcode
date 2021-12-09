const baseUrl = "https://61af63b83e2aba0017c492a0.mockapi.io/toDoApi/tasksList"; 

export const getTasksList = () =>
  fetch(baseUrl).then((response) => response.json()); 

export const createTask = (taskData) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(taskData),
  });
export const updateTask = (id, value) =>
  fetch(`${baseUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(value),
  });
