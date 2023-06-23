document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form');
  let todoText = document.querySelector('#todo-text');
  let todosList = document.querySelector('#todos-list');
 
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let newTodo = todoText.value;
    let listItem = document.createElement('li');
    listItem.textContent = newTodo;

    todosList.appendChild(listItem);

    e.target.reset();
  });

});