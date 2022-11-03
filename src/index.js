// import _ from 'lodash';

import form from './modules/do';
import { todoInput } from './modules/do';
import { doList } from './modules/do';

// eslint-disable-line

import './style.css';


// Vars
let todos = JSON.parse(localStorage.getItem('todos')) || [];
let editTodoId = -1;

// Form submit
form.addEventListener('submit', (e) => {
    e.preventDefault();

    saveTodo();
    renderTodos();
    localStorage.setItem('todos', JSON.stringify(todos));
});

// Save todo

const saveTodo = () => {
    const todoValue = todoInput.value;

    // check if the todolist is empty
    const isEmpty = todoValue === '';

    // check for duplication
    const isDuplicate = todos.some((todo) => todo.description.toUpperCase() === todoValue.toUpperCase())

    if (isEmpty) {
        alert("To do list is empty");
    } else if (isDuplicate) {
        alert('Todo already exists!');
    } else {
        if (editTodoId >= 0) {
            // update the edit todo
            todos = todos.map((todo, index) => ({
                    ...todo,
                description: index ===  editTodoId ? todoValue : todo.description
            }));

            editTodoId = -1;
        } else {
            todos.push({
                indexNum: '@'+ Math.floor(Math.random() * todos.length),
                description: todoValue,
                completed: false,
            });
        }
        todoInput.value = '';
    };
}


// render todos

const renderTodos = () => {
if (todos.length === 0) {
    doList.innerHTML =`<center>Nothing To Do!</center>`
    return
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
                <i class="fa-solid fa-trash" data-action='delete'>                <i class="fa-solid fa-ellipsis-vertical" data-action='move'></i>
                </i>
        </div>`;
    })
}

// first render

renderTodos();


// add eventlisner for all the do lists

doList.addEventListener('click', (e) => {
    const target = e.target;
    const parentEle = target.parentNode;

    if (parentEle.className !== 'item') return;

    const item = parentEle;
    const itemId = Number(item.id);

    const action = target.dataset.action;

    action === 'check' && checkTodo(itemId);
    action === 'edit' && editTodo(itemId);
    // action === 'move' && moveTodo(itemId);
    action === 'delete' && deleteTodo(itemId);
});

// check for todo

const checkTodo = (itemId) => {
    todos = todos.map((todo, index) => ({
        ...todo,
        completed: index === itemId? !todo.completed : todo.completed
    }));

    renderTodos();
    localStorage.setItem('todos', JSON.stringify(todos));
}

// edit todo

const editTodo = (itemId) => {
    todoInput.value = todos[itemId].description;
    editTodoId = itemId
}

// delete todo

const deleteTodo = (itemId) => {
    todos = todos.filter((todo, index) => index !== itemId);
    editTodoId = -1;

    // re render
    renderTodos();
    localStorage.setItem('todos', JSON.stringify(todos))
}