/* eslint-disable import/no-unresolved */
import './style.css';
import add from './addTask.js';
import rem from './removeTask.js';
import removeSplice from './clearTask.js';
import { setStorage } from './localStorage.js';
import toggleTask from './toggleTask.js';
import reorder from './reorder.js';

const task = JSON.parse(localStorage.getItem('todos')) || [];
const submitBtn = document.getElementById('push');

const tasks = document.getElementById('list');
function renderList(todos) {
  tasks.innerHTML = '';
  todos.forEach((todo) => {
    const { description, index } = todo;
    const task = document.createElement('li');
    const desc = document.createElement('span');
    desc.setAttribute('contenteditable', true);
    desc.classList.add('description');
    desc.setAttribute('id', todo.index);
    const deleteBtn = document.createElement('i');
    deleteBtn.setAttribute('id', todo.index);
    deleteBtn.classList.add('fas');
    deleteBtn.classList.add('fa-trash-alt');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.setAttribute('data-index', index);
    desc.innerText = description;
    task.append(checkbox, desc, deleteBtn);
    tasks.append(task);
  });
}

const removeIndex = (index) => {
  removeSplice(task, index);
  setStorage(task);
};
// eslint-disable-next-line import/prefer-default-export
export { removeIndex };

submitBtn.addEventListener('click', () => {
  const todos = [...task];
  const todo = document.querySelector('input[type=text]').value;
  add(todos, todo, setStorage);
  window.location.reload();
});

tasks.addEventListener('click', (event) => {
  if (event.target.tagName.toLowerCase() === 'i') {
    const todos = [...task];
    const todo = todos[event.target.id - 1];
    rem(todos, todo, setStorage);
    window.location.reload();
  }
});

tasks.addEventListener('change', (event) => {
  if (event.target.type === 'checkbox') {
    toggleTask(task, Number(event.target.getAttribute('data-index')), setStorage);
    window.location.reload();
  }
});

tasks.addEventListener('focusout', (event) => {
  if (event.target.className === 'description') {
    const todo = task[Number(event.target.id) - 1];
    todo.description = event.target.textContent;
    setStorage(task);
    // eslint-disable-next-line no-undef
    tempText = '';
  }
});

document.querySelector('#completed').addEventListener('click', () => {
  const unfinished = task.filter((todo) => todo.completed === false);
  reorder(unfinished);
  setStorage(unfinished);
  window.location.reload();
});

window.onload = () => {
  renderList(task);
};