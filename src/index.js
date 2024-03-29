import form, { doList } from './modules/do.js';
import Tasks from './modules/tasks.js';
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
  const parentEle = target.parentNode.parentNode;

  if (parentEle.className !== 'item') return;

  const item = parentEle;
  const itemId = Number(item.id);

  const { action } = target.dataset;

  if (action === 'check' && Tasks.checkTodo(itemId)) return;
  if (action === 'edit' && Tasks.editTodo(itemId)) return;
  if (action === 'delete' && Tasks.deleteTodo(itemId));
});

// Clear all

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
  const list = JSON.parse(localStorage.getItem('todos'));
  const todoArr = list.filter((todo) => todo.completed === false);
  todoArr.forEach((todo) => {
    todo.indexNum = 1 + todoArr.indexOf(todo);
  });
  localStorage.setItem('todos', JSON.stringify(todoArr));
  window.location.reload();
});
