const checkBox = document.querySelector('.task-status');
const onOff = () => console.log (checkBox.checked);
checkBox.addEventListener('change', onOff);
