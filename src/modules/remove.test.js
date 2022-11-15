import { upperCase } from 'lodash';
import Tasks, { todos } from './tasks.js';

const setup = {
  appConfig: jest.fn(),
};
Object.defineProperty(window, 'setup', setup);

describe('Check removing todos', () => {
  test('Remove todos from the list', () => {
    const Tasks = jest.spyOn(Tasks, 'tasks');
    // const doList = document.querySelector('.do-list');
    Tasks.saveTodo('To read about JavaScript');
    Tasks.saveTodo('Meeting with friends');
    Tasks.saveTodo('Meeting');
    Tasks.deleteTodo(0);
    Tasks.renderTodos(Tasks.doList);
    expect(todos).toHaveLength(2);
  });
});