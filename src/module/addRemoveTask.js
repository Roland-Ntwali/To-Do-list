// declare a todo
let todos = [];

// save to local storage
const saveTodo = () => {
  const allTodos = JSON.stringify(todos);
  localStorage.setItem('todos', allTodos);
};

// remove function
const removeTask = (id) => {
  todos = todos.filter((task) => task.id !== id);
  todos.forEach((todo, id) => {
    todo.id = id + 1;
  });
  saveTodo();
};

const completedTodo = (stats, index) => {
  todos[index - 1].completed = stats;
  saveTodo();
};

// Add function
const addTask = (todo) => {
  const ul = document.createElement('div');
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.classList.add('checkBox');

  const newInp = document.createElement('input');
  newInp.type = 'text';
  newInp.classList.add('newInput');
  newInp.value = todo.Description;

  checkBox.onclick = (e) => {
    completedTodo(e.target.checked, todo.id);

    if (todo.completed === true) {
      newInp.classList.add('completed');
    } else {
      newInp.classList.remove('completed');
    }
  };

  if (todo.completed === true) {
    checkBox.checked = 'checked';
    newInp.classList.add('completed');
  }

  const icon = document.createElement('i');
  icon.classList.add('fa-solid');
  icon.classList.add('fa-trash');
  icon.classList.add('dots');
  const hr = document.createElement('hr');
  ul.append(checkBox, newInp, icon, hr);
  const todoContainer = document.querySelector('.todoContainer');

  todoContainer.append(ul);
  icon.addEventListener('click', () => {
    icon.parentElement.remove();
    removeTask(todo.id);
  });
};
todos.forEach(addTask);

export { addTask, removeTask };