import { renderTodos } from "..";
import form, { todoInput, doList } from './do.js';

// Vars
export let todos = JSON.parse(localStorage.getItem('todos')) || [];
export let editTodoId = -1;


export default class Tasks {
    constructor(indexNum, description, completed) {
        this.indexNum = indexNum;
        this.description = description;
        this.completed = completed
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

        renderTodos();
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

        todos.forEach( (todo, index) => {
        todo.indexNum = index;
        })

        // re render
        renderTodos();
        localStorage.setItem('todos', JSON.stringify(todos));
    };

}