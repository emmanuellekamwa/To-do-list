import './style.css';
import { checkboxCheck, change } from './checkbox.js';
import add from './addTask.js';
import rem from './removeTask.js';
import removeSplice from './clearTask.js';
import { setStorage, getStorage } from './localStorage.js';

const list = [];
const clear = document.getElementById('completed');
const form = document.getElementById('push');
const task = getStorage();

function saveList() {
  const myList = JSON.stringify(list);
  localStorage.setItem('list', myList);
}

const tasks = document.getElementById('list');
function renderList(todos) {
  tasks.innerHTML = '';
  todos.forEach((todo) => {
    const { description, index } = todo;
    const task = document.createElement('li');
    const desc = document.createElement('p');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.setAttribute('data-index', index);
    desc.innerText = description;
    task.append(checkbox, desc);
    tasks.append(task);
    checkboxCheck(list, index, checkbox);
  });
}

const removeIndex = (index) => {
  removeSplice(task, index);
  setStorage(task);
};
// eslint-disable-next-line import/prefer-default-export
export { removeIndex };

clear.addEventListener('click', () => {
  rem(task);
  setStorage(task);
});

form.addEventListener('click', () => {
  task.push(add(task));
  setStorage(task);
});

tasks.addEventListener('change', (event) => {
  if (event.target.type === 'checkbox') {
    change(list, Number(event.target.getAttribute('data-index')));
    saveList();
  }
});

function checkStorage() {
  if (!localStorage.getItem('list')) {
    localStorage.setItem('list', JSON.stringify(list));
  }
}

window.onload = () => {
  checkStorage();
  renderList(list);
};