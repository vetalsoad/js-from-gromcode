const taskStatus = document.querySelector('.task-status');

function handler(event) {

console.log(event.target.checked);
}

taskStatus.addEventListener('change', handler);