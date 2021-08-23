const checkboxCheck = (list, index, checkbox) => {
  const task = list[index - 1];
  if (task.completed) {
    checkbox.setAttribute('checked', 'true');
  } else {
    checkbox.removeAttribute('checked', 'true');
  }
};

function change(list, index) {
  const task = list[index - 1];
  task.completed = !task.completed;
}

export { checkboxCheck, change };