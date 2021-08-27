export default (list) => {
  const form = document.getElementById('input-text').value;
  let index = 0;
  for (let i = 0; i < list.length; i += 1) { index = list[i].index; }
  const blob = {
    description: form,
    completed: false,
    index: index + 1,
  };
  document.getElementById('input-text').value = '';
  return blob;
};