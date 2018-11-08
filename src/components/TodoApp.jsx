import React from "react";
import AddTodo from "./AddTodo";
import Fiter from "./Filter";
import TodoList from "./TodoList";

const TodoApp = ({
  addTodo,
  removeTodo,
  todoList,
  onFilter,
  toggleTodo,
  filter
}) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To do app</h1>
      </header>
      <div className="content">
        <div className="todo">
          <AddTodo addTodo={addTodo} />
          <TodoList
            todoList={todoList}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
          <div className="todo-filters">
            <Fiter
              onFilter={() => onFilter(null)}
              label={"All"}
              active={filter === null}
            />
            <Fiter
              onFilter={() => onFilter(true)}
              label={"Active"}
              active={filter === true}
            />
            <Fiter
              onFilter={() => onFilter(false)}
              label={"Completed"}
              active={filter === false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
