// const addition = require('./calcul.js')
import Tasks, { todos } from './tasks.js';

describe('Check adding todos', () => {
  test('Add todos functionality', () => {
    Tasks.saveTodo('To read about JavaScript');
    expect(todos).toHaveLength(1);
  });
  test('addition test', () => {
    Tasks.saveTodo('Meeting with friends');
    expect(todos).toHaveLength(2);
  });
  test('Checking added todos', () => {
    Tasks.saveTodo('Playing football');
    expect(todos[2].description).toBe('Playing football');
  });
});