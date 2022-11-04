// import renderTodos from '..';
import { todoInput } from './do.js';

// Vars
let todos = JSON.parse(localStorage.getItem('todos')) || [];
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

      // check if the todolist is empty
      const isEmpty = todoValue === '';

      if (isEmpty) {
        alert('To do list is empty');
      } else if (todos.some((todo) => todo.description.toUpperCase() === todoValue.toUpperCase())) {
        alert('Todo already exists!');
      } else {
        if (editTodoId >= 0) {
          // update the edit todo
          todos = todos.map((todo, index) => ({
            ...todo,
            description: index === editTodoId ? todoValue : todo.description,
          }));

          editTodoId = -1;
        } else {
          todos.push({
            indexNum: todos.length,
            description: todoValue,
            completed: false,
          });
        }
        todoInput.value = '';
      }
    };

    // // check for todo

    static checkTodo = (itemId) => {
      todos = todos.map((todo, index) => ({
        ...todo,
        completed: index === itemId ? !todo.completed : todo.completed,
      }));

      Tasks.renderTodos();
      localStorage.setItem('todos', JSON.stringify(todos));
    };

    // //  // edit todo

    static editTodo = (itemId) => {
      todoInput.value = todos[itemId].description;
      editTodoId = itemId;
    };

    // // // delete todo

    static deleteTodo = (itemId) => {
      todos = todos.filter((todo, index) => index !== itemId);
      editTodoId = -1;

      todos.forEach((todo, index) => {
        todo.indexNum = index;
      });

      // re render
      Tasks.renderTodos();
      localStorage.setItem('todos', JSON.stringify(todos));
    };

    static renderTodos = () => {
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
}