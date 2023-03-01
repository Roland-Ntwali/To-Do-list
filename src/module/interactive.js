import addTask from './addRemoveTask.js';

const form = document.querySelector('form');
const input = document.querySelector('.input');
// const todoContainer = document.querySelector('.todoContainer');

let todos = [];
let todo;

// function  saving todos to the local storage
const saveTodo = () => {
  const allTodos = JSON.stringify(todos);
  localStorage.setItem('todos', allTodos);
};

// function getting stored thing from the storage
const getStoredTodos = () => {
  todos = JSON.parse(localStorage.getItem('todos'));
};

const store = () => {
  todo = {
    Description: input.value,
    id: todos.length + 1,
    completed: false,
  };
  todos.push(todo);
  saveTodo();
};

// function clearing the input field
const clear = () => {
  input.value = '';
};


const editTodoList = () => {
  const editInput = document.querySelectorAll('.newInput');
  editInput.forEach((edits, indexy) => {
    edits.addEventListener('change', () => {
      todos.forEach((todo, index) => {
        if (indexy === index) {
          todo.Description = edits.value;
          saveTodo();
        }
      });
    });
  });
};
editTodoList();

function formSubmission() {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value !== '') {
      store();
      addTask(todo);
      clear();
    }
  });
}

const populateTasks = () => {
  if (localStorage.getItem('todos')) {
    getStoredTodos();
    todos.map((task) => {
      addTask(task);
      return task;
    });
  } else {
    todos.map((task) => {
      addTask(task);
      return task;
    });
  }
};

const clearCompleted = () => {
  todos = todos.filter((task) => task.completed !== true);
  todos.forEach((todo, id) => {
    todo.id = id + 1;
  });
  saveTodo();
};

export {
  formSubmission, editTodoList, populateTasks, clearCompleted,
};
