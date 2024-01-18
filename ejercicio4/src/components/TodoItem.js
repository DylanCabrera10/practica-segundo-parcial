// components/TodoItem.js
import React from "react";

const TodoItem = ({ index, todo, removeTodo }) => {
  return (
    <li>
      {todo}
      <button onClick={() => removeTodo(index)}>Eliminar</button>
    </li>
  );
};

export default TodoItem;
