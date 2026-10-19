const form = document.querySelector('#task-form');
const input = document.querySelector('#task-input');
const list = document.querySelector('#task-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const task = input.value.trim();
  if (!task) return;

  const item = document.createElement('li');
  item.textContent = task;
  list.appendChild(item);
  input.value = '';
  input.focus();
});
