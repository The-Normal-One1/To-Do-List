// import _ from 'lodash';

// eslint-disable-line

import './style.css';

const dolist = [
  {
    index: 0,
    description: 'Doing some exercise',
    completed: true,
  },
  {
    index: 1,
    description: 'Meeting with family',
    completed: true,
  },
  {
    index: 2,
    description: 'Watching football games',
    completed: true,
  },
  {
    index: 3,
    description: 'Study',
    completed: true,
  },
];

const taskInput = document.querySelector('.do-list');

const lists = () => {
  const list = dolist.map((items) => `<div class="item">
        <div class="btn-check">
        <i class="fa-regular fa-square"></i>
        </div>
        <p>${items.description}</p>
        <div class="task-dots">
        <i class="fa-solid fa-ellipsis-vertical"></i>
        <i class="fa-solid fa-trash"></i>
        </div>
    </div>`).join('');

  taskInput.insertAdjacentHTML('afterend', list);
};

window.document.addEventListener('DOMContentLoaded', lists);

// function component() {
//     const element = document.createElement('div');

//     // Lodash, now imported by this script
//     element.innerHTML = _.join(['Hello', 'Ermiyas'], ' ');
//     element.classList.add('hello');

//     return element;
// }

// document.body.appendChild(component());