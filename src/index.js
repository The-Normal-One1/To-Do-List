// import _ from 'lodash';
import form, { doList } from './modules/do.js';
import Tasks from './modules/tasks.js';
// eslint-disable-line
import './style.css';

const todos = JSON.parse(localStorage.getItem('todos')) || [];

// Form submit
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Tasks.saveTodo();
  localStorage.setItem('todos', JSON.stringify(Tasks.saveTodo()));
  Tasks.renderTodos();

  // console.log(Tasks.saveTodo());
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