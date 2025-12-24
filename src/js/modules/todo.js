const addForm = document.querySelector('.td-add-form');
const addInput = document.querySelector('.td-add-input');

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let todoObj = {
    content: addInput.value.trim(),
    isDone: false,
  };
  console.log(todoObj);
});
