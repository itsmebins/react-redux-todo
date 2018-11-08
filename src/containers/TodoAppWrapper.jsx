import React from "react";
import { connect } from "react-redux";
import TodoApp from "../components/TodoApp";
import {
  addTodo,
  removeTodo,
  toggleTodo,
  filterTodoList
} from "../store/actions/todo";

const mapStateToProps = state => ({
  todoList:
    state.todo.filter === null
      ? [...state.todo.todoList]
      : state.todo.todoList.filter(todo => todo.active === state.todo.filter),
  filter: state.todo.filter
});

const mapDispatchToProps = dispatch => ({
  addTodo: label => dispatch(addTodo(label)),
  onFilter: filter => dispatch(filterTodoList(filter)),
  removeTodo: todoId => dispatch(removeTodo(todoId)),
  toggleTodo: todoId => dispatch(toggleTodo(todoId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);
