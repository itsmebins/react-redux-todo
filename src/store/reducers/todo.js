import {
  ADD_TODO,
  REMOVE_TODO,
  FILTER_TODO_LIST,
  TOGGLE_TODO
} from "../actions/types";

const initialState = {
  todoList: [],
  filter: null
};
export default (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [
          ...state.todoList,
          { id: action.id, label: action.label, active: true }
        ]
      };
    case REMOVE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.id !== action.id)
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todoList: state.todoList.map(
          todo =>
            todo.id === action.id
              ? {
                  ...todo,
                  active: !todo.active
                }
              : todo
        )
      };
    case FILTER_TODO_LIST:
      return {
        ...state,
        filter: action.filter
      };
    default:
      return state;
  }
};
