import React from "react";
import PropTypes from "prop-types";

const TodoList = ({ todoList, removeTodo, toggleTodo }) => {
  return (
    <div className="todo-list">
      {todoList.map(todo => {
        return (
          <div className="todo-item" key={todo.id}>
            <span className="todo-item-label">
              {todo.active === false ? "C" : "A"}
            </span>
            <span
              className="todo-item-label"
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.label}
            </span>
            <span
              className="todo-item-label"
              onClick={() => removeTodo(todo.id)}
            >
              {"X"}
            </span>
          </div>
        );
      })}
    </div>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired
};

export default TodoList;
