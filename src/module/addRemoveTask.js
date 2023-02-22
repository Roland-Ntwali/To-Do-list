const form = document.querySelector('form');
const input = document.querySelector('.input');
const todoContainer = document.querySelector('.todoContainer');

let todo;
let todos = JSON.parse(localStorage.getItem('todos')) || [];
const store = () => {
  todo = {
    Description: input.value,
    id: todos.length + 1,
    completed: false,
  };
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
};

const clear = () => {
  input.value = '';
};

const removeTask = (id) => {
  todos = todos.filter((books) => books.id !== id);
  todos.forEach((todo, id) => {
    todo.id = id + 1;
  });
  localStorage.setItem('todos', JSON.stringify(todos));
};

const addTask = (todo) => {
  const ul = document.createElement('div');
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.classList.add('checkBox');
  const newInp = document.createElement('input');
  newInp.type = 'text';
  newInp.classList.add('newInput');
  newInp.value = todo.Description;
  const icon = document.createElement('i');
  icon.classList.add('fa-solid');
  icon.classList.add('fa-trash');
  icon.classList.add('dots');
  const hr = document.createElement('hr');
  ul.append(checkBox, newInp, icon, hr);
  todoContainer.append(ul);
  icon.addEventListener('click', () => {
    icon.parentElement.remove();
    removeTask(todo.id);
  });
};
todos.forEach(addTask);

const editTodoList = () => {
  const editInput = document.querySelectorAll('.newInput');
  editInput.forEach((edits, indexy) => {
    edits.addEventListener('change', () => {
      todos.forEach((todo, index) => {
        if (indexy === index) {
          todo.Description = edits.value;
          localStorage.setItem('todos', JSON.stringify(todos));
        }
      });
    });
  });
};
editTodoList();

function populate() {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value !== '') {
      store();
      addTask(todo);
      clear();
    }
  });
}

export { populate, editTodoList };
