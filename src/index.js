import {
  clearCompleted,
  editTodoList,
  formSubmission,
  populateTasks,
} from './module/addRemoveTask.js';
import './index.css';

const clearCompletedButton = document.querySelector('.clear-completed');

clearCompletedButton.addEventListener('click', clearCompleted);

formSubmission();
editTodoList();
populateTasks();
