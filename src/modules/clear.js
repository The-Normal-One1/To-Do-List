// Clear all
const clearAll = (list) => {
  const todoArr = list.filter((todo) => todo.completed === false);
  todoArr.forEach((todo) => {
    todo.indexNum = 1 + todoArr.indexOf(todo);
  });
  return todoArr;
};
export default clearAll;
