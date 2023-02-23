const form = document.querySelector('form');
const input = document.querySelector('.input');
const todoContainer = document.querySelector('.todoContainer');

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

// stats stand for status
const completedTodo = (stats, index) => {
  todos[index - 1].completed = stats;
  saveTodo();
};

const removeTask = (id) => {
  todos = todos.filter((task) => task.id !== id);
  todos.forEach((todo, id) => {
    todo.id = id + 1;
  });
  saveTodo();
};

// dynamic html with checkbox definition
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
