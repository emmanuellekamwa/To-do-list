/* eslint-disable import/no-unresolved */
import reorder from './reorder.js';

export default (taskList, task, callback) => {
  const index = taskList.indexOf(task);
  taskList.splice(index, 1);
  reorder(taskList);
  callback(taskList);
};