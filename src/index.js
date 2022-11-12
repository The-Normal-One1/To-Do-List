// import _ from 'lodash';
import form, { doList } from './modules/do.js';
import Tasks, { todos } from './modules/tasks.js';
import clearAll from './modules/clear.js';
// eslint-disable-line
import './style.css';

// Form submit
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Tasks.saveTodo();
  localStorage.setItem('todos', JSON.stringify(Tasks.saveTodo()));
  Tasks.renderTodos();
});

// first renTasksder

Tasks.renderTodos();

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

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
  const list = JSON.parse(localStorage.getItem('todos'));
  localStorage.setItem('todos', JSON.stringify(clearAll(list)));
  window.location.reload();
});