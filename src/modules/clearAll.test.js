// clear all
import clearAll from './clear.js';
import Tasks, { todos } from './tasks.js';

describe('Check adding todos', () => {
  // Clear all test
  test('Add todos functionality', () => {
    Tasks.saveTodo('To read about JavaScript');
    Tasks.saveTodo('To ride a bike');
    Tasks.saveTodo('Meeting');
    todos[0].completed = true;
    expect(clearAll(todos)).toHaveLength(2);
  });
  // Completd Test
  test('Completed Test', () => {
    Tasks.saveTodo('Go to GYM');
    Tasks.saveTodo('To eat Burger');
    Tasks.saveTodo('To read about JavaScript');
    todos[0].completed = true;
    expect(todos[0].completed).toBe(true);
  });
  // Edit Test
  test('Add todos functionality', () => {
    Tasks.saveTodo('Playing Golf');
    Tasks.saveTodo('Gaming', 1);
    // console.log(todos)
    expect(todos[1].description).toBe('Gaming');
  });
});