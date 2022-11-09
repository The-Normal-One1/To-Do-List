// const addition = require('./calcul.js')
import Tasks from './tasks.js';

describe('The value', () => {
    test('addition test', ()=>{
        expect(Tasks.del(5)).toBe(1)
        })
  });