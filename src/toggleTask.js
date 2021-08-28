export default (tasks, index, callback) => {
  tasks[index - 1].completed = !tasks[index - 1].completed;
  callback(tasks);
};