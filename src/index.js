// import _ from 'lodash';

import form, { doList } from './modules/do.js';
// import SaveTodo from './modules/savetodo.js';
import Tasks, { todos } from './modules/tasks.js';

// eslint-disable-line

import './style.css';

// render todos

export const renderTodos = () => {
  if (todos.length === 0) {
    doList.innerHTML = '<center>Nothing To Do!</center>';
    return;
  }

  // clear element before re render
  doList.innerHTML = '';

  todos.forEach((todo, index) => {
    doList.innerHTML += `
          <div class="item" id=${index}>
                  <i class="fa-regular ${todo.completed ? 'fa-square-check' : 'fa-square'}"
                  data-action='check'
                  ></i>
                  <p data-action='edit'>${todo.description}</p>
                  <i class="fa-solid fa-trash" data-action='delete'><i class="fa-solid fa-ellipsis-vertical" data-action='move'></i>
                  </i>
          </div>`;
  });
};

// Form submit
form.addEventListener('submit', (e) => {
  e.preventDefault();

  Tasks.saveTodo();
  renderTodos();
  localStorage.setItem('todos', JSON.stringify(todos));
});

// first renTasksder

renderTodos();

// add eventlisner for all the do lists

doList.addEventListener('click', (e) => {
  const { target } = e;
  const parentEle = target.parentNode;

  if (parentEle.className !== 'item') return;

  const item = parentEle;
  const itemId = Number(item.id);

  const { action } = target.dataset;

  if (action === 'check' && Tasks.checkTodo(itemId)) return;
  if (action === 'edit' && Tasks.editTodo(itemId)) return;
  // action === 'move' && moveTodo(itemId);
  if (action === 'delete' && Tasks.deleteTodo(itemId));
});