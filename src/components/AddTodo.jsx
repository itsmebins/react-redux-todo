import React from "react";

const AddTodo = ({ addTodo }) => {
  let inputRef = React.createRef();
  return (
    <div>
      <div className="todo-input-cr">
        <input
          type="text"
          className="todo-input"
          ref={inputRef}
          placeholder="Add todo item"
        />
        <button
          className="todo-button"
          onClick={() => addTodo(inputRef.current.value)}
        >
          {" "}
          Add task
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
