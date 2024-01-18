// components/TodoList.js
import React from "react";
import TodoItem from "./TodoItem";
import "../styles/TodoListStyles.css";

const TodoList = ({ todos, removeTodo }) => {
  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} index={index} todo={todo} removeTodo={removeTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
