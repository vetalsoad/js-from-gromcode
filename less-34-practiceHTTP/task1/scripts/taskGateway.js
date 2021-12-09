const baseUrl = "https://61b1e667c8d4640017aaf049.mockapi.io/api/v1/todoList"; 

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
