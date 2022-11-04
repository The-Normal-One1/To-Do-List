import { todos,editTodoId,renderTodos } from "..";
import form, { todoInput, doList } from './do.js';

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
}