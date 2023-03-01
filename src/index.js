import {
  clearCompleted,
  editTodoList,
  formSubmission,
  populateTasks,
} from './module/interactive.js';
import './index.css';

const clearCompletedButton = document.querySelector('.clear-completed');

clearCompletedButton.addEventListener('click', clearCompleted);

formSubmission();
editTodoList();
populateTasks();
