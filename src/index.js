import './style.css';
import { checkboxCheck, change } from './checkbox.js';

const list = JSON.parse(localStorage.getItem('list')) || [
  {
    description: 'Say morning prayers',
    completed: false,
    index: 1,
  },
  {
    description: 'Do the laundry',
    completed: false,
    index: 2,
  },
  {
    description: 'Pick children from school',
    completed: true,
    index: 3,
  },
];

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