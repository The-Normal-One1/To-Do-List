// import { upperCase } from 'lodash';
import Tasks1, { todos } from './tasks.js';

const setup = {
  appConfig: jest.fn(),
};
Object.defineProperty(window, 'setup', setup);

describe('Check removing todos', () => {
  test('Remove todos from the list', () => {
    const Tasks = jest.spyOn(Tasks1, 'saveTodo');
    const Delete = jest.spyOn(Tasks1, 'deleteTodo');
    const Render = jest.spyOn(Tasks1, 'renderTodos');
    // const doList = document.querySelector('.do-list');
    Tasks('To read about JavaScript');
    Tasks('Meeting with friends');
    Tasks('Meeting');
    Delete(0);
    Render(Tasks1.doList);
    expect(Tasks1.todos).toHaveLength(2);
  });
});