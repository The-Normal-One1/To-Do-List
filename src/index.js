// import _ from 'lodash';

import { forEach } from 'lodash';
import form, { todoInput, doList } from './modules/do.js';
// import SaveTodo from './modules/savetodo.js';
import Tasks from './modules/tasks.js';

// eslint-disable-line

import './style.css';

// Vars
export let todos = JSON.parse(localStorage.getItem('todos')) || [];
export let editTodoId = -1;

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

// check for todo

const checkTodo = (itemId) => {
  todos = todos.map((todo, index) => ({
    ...todo,
    completed: index === itemId ? !todo.completed : todo.completed,
  }));

  renderTodos();
  localStorage.setItem('todos', JSON.stringify(todos));
};

// // edit todo

const editTodo = (itemId) => {
  todoInput.value = todos[itemId].description;
  editTodoId = itemId;
};

// // delete todo

const deleteTodo = (itemId) => {
  todos = todos.filter((todo, index) => index !== itemId);
  editTodoId = -1;

  todos.forEach( (todo, index) => {
    todo.indexNum = index;
  })

  // re render
  renderTodos();
  localStorage.setItem('todos', JSON.stringify(todos));

  console.log(itemId);
};

// add eventlisner for all the do lists

doList.addEventListener('click', (e) => {
  const { target } = e;
  const parentEle = target.parentNode;

  if (parentEle.className !== 'item') return;

  const item = parentEle;
  const itemId = Number(item.id);

  const { action } = target.dataset;

  if (action === 'check' && checkTodo(itemId)) return;
  if (action === 'edit' && editTodo(itemId)) return;
  // action === 'move' && moveTodo(itemId);
  if (action === 'delete' && deleteTodo(itemId));
});