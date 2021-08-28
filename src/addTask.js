export default (taskList, description, callback) => {
  const task = { index: taskList ? taskList.length + 1 : 1, description, completed: false };
  taskList.push(task);
  callback(taskList);
};