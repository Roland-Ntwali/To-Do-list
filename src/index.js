/* eslint-disable */
import _ from 'lodash';
import './index.css';


const listsContainer = document.querySelector("[data-lists]");
const newListForm = document.querySelector("[data-new-list-form]");
const newListInput = document.querySelector("[data-new-list-input]");

const Local_storage_list_key = "task.lists";

let lists = JSON.parse(localStorage.getItem(Local_storage_list_key)) || [];

newListForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const listName = newListInput.value;
  if (listName == null || listName === "") return;
  const list = createList(listName);
  newListInput.value = null;
  lists.push(list);
  saveAndRender();
});

function createList(activity) {
  return { id: Date.now().toString(), activity: activity, tasks: false };
}

function saveAndRender() {
  save();
  render();
}

function save() {
  localStorage.setItem(Local_storage_list_key, JSON.stringify(lists));
}

function render() {
  clearElement(listsContainer);
  lists.forEach((list) => {
    const listElement = document.createElement("li");
    listElement.dataset.listId = list.id;
    listElement.classList.add = "list-name";
    // listElement.className.padEnd = 'list-name'

    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    listElement.appendChild(checkBox);

    const paragraph = document.createElement('p');
    paragraph.innerHTML = list.activity;
    listElement.appendChild(paragraph);

    listsContainer.appendChild(listElement);
  });
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

render();