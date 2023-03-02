// declare a todo
let todos = [];

// save to local storage
const saveTodo = () => {
  const allTodos = JSON.stringify(todos);
  localStorage.setItem('todos', allTodos);
};
const clearCompleted = () => {
  todos = todos.filter((task) => task.completed !== true);
  todos.forEach((todo, id) => {
    todo.id = id + 1;
  });
  saveTodo();
  window.location.reload();
};
export default clearCompleted;