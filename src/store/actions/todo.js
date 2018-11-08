import { ADD_TODO, FILTER_TODO_LIST, REMOVE_TODO, TOGGLE_TODO } from "./types";
let nextId = 0;
export const addTodo = label => {
  return {
    type: ADD_TODO,
    id: nextId++,
    label
  };
};

export const removeTodo = todoId => ({ type: REMOVE_TODO, id: todoId });

export const filterTodoList = filter => ({ type: FILTER_TODO_LIST, filter });

export const toggleTodo = todoId => ({ type: TOGGLE_TODO, id: todoId });
