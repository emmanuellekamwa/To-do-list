export default (list, index) => {
  list.splice(index, 1);
  return list;
};