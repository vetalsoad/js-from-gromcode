const listElem = document.querySelector(".list");

const tasks = [
  { text: "Buy milk", done: false, id:1},
  { text: "Pick up Tom from airport", done: false, id:2 },
  { text: "Visit party", done: false, id:3 },
  { text: "Visit doctor", done: true, id:4 },
  { text: "Buy meat", done: true, id:5},
];

const renderTasks = (tasksList) => {
  listElem.textContent = "";
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");

      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute('data-id', id)
      checkbox.checked = done;
      checkbox.classList.add("list__item-checkbox");

      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// WEB FLOW
//  1. get data (получаем данные)
// 2. render (отрисовуем их)
// 3. update data (обновляем)
// 4. re-render (перерисовуем)

// 1. get data (получаем данные)
// 2. create task Object, add to array
// 3. re-render 

const inputElement = document.querySelector('.task-input');
const createBtnElement = document.querySelector(".create-task-btn");

function createTaskHandler() {  
  
  const value = inputElement.value;

  const task = {
    text: value,
    done: false,
    id: Math.random(),
  };
  if (value !== "") {
    tasks.push(task);
    
    renderTasks(tasks); 
  }

}
createBtnElement.addEventListener('click', createTaskHandler);
// algo
// 1. check if clicked on checkbox
// 2. find task where clicked
// 3. update data (обновляем)
// 4. re-render (перерисовуем)

function updateTaskHandler(event){
  

   if (!event.target.classList.contains("list__item-checkbox")){
     return;
   }
     
     const idToUpdate = event.target.dataset.id;
     const taskToUpdate = tasks.find(task => task.id == idToUpdate);
     console.log(idToUpdate);
     taskToUpdate.done = !taskToUpdate.done;
     console.log(taskToUpdate);
     renderTasks(tasks);

  }


listElem.addEventListener('click', updateTaskHandler);