export default (tasks) => {
  tasks.forEach((task) => {
    task.index = tasks.indexOf(task) + 1;
  });
};