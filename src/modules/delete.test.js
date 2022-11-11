import Tasks, {todos} from './tasks.js';

describe('Check adding todos', () => {
    test('Add todos functionality', ()=>{
        const doList = document.querySelector('.do-list');
        Tasks.saveTodo('To read about JavaScript')
        Tasks.saveTodo('Meeting with friends')
        Tasks.saveTodo('Meeting')
        Tasks.deleteTodo(1)
        expect(todos).toHaveLength(2)
        })
  });

     // test('addition test', ()=>{
    //     Tasks.saveTodo('Meeting with friends')
    //     expect(todos).toHaveLength(2)
    //     })
    // test('Checking added todos', ()=>{
    //     Tasks.saveTodo('Playing football')
    //     expect(todos[2].description).toBe('Playing football')
    //     })