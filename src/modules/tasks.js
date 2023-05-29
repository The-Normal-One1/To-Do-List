import { todoInput } from './do.js';

// Vars
export let todos = JSON.parse(localStorage.getItem('todos')) || [];
let editTodoId = -1;
const doList = document.querySelector('.do-list');

export default class Tasks {
  constructor(indexNum, description, completed) {
    this.indexNum = indexNum;
    this.description = description;
    this.completed = completed;
  }

  static saveTodo = () => {
    const todoValue = todoInput.value;

    if (editTodoId >= 0) {
      todos = todos.map((todo, index) =>
        index === editTodoId ? { ...todo, description: todoValue } : todo
      );
      editTodoId = -1;
    } else {
      const newTodo = {
        indexNum: todos.length + 1,
        description: todoValue,
        completed: false,
      };
      todos.push(newTodo);
    }

    todoInput.value = '';

    return todos;
  };

  // check for todo

  static checkTodo = (itemId) => {
    todos = todos.map((todo, index) =>
      index === itemId ? { ...todo, completed: !todo.completed } : todo
    );

    Tasks.renderTodos();
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  // edit todo

  static editTodo = (itemId) => {
    todoInput.value = todos[itemId].description;
    editTodoId = itemId;
  };

  // delete todo

  static deleteTodo = (itemId) => {
    todos = todos.filter((todo, index) => index !== itemId);
    editTodoId = -1;

    todos.forEach((todo, index) => {
      todo.indexNum = index + 1;
    });

    // re render
    Tasks.renderTodos();
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  static renderTodos = () => {
    if (todos.length === 0) {
      doList.innerHTML = '<center class= "nothing">Nothing To Do!</center>';
      return;
    }

    // clear element before re render
    doList.innerHTML = '';

    todos.forEach((todo, index) => {
      doList.innerHTML += `
                <div class="item" id=${index}>
                        <i class="fa-regular ${
                          todo.completed ? 'fa-square-check' : 'fa-square'
                        }"
                        data-action='check'
                        ></i>
                        <p data-action='edit'>${todo.description}</p>
                        <i class="fa-solid fa-trash" data-action='delete'>
                        </i>
                </div>`;
    });
  };
}
