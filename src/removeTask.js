export default (list) => {
  const remove = [];
  for (let i = 0; i < list.length; i += 1) {
    if (document.getElementById(i).checked) { remove.push(i); }
  }
  let counter = 0;
  remove.forEach((element) => {
    list.splice(element - counter, 1);
    counter += 1;
  });
  return list;
};