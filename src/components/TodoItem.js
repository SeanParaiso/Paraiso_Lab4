import React from "react";

function TodoItem({ todoList }) {
  return (
    <div className="todo-item">
      <div className="checker">
        <span className="span">
          <input className="checkbox" type="checkbox" />
        </span>
      </div>
      <span>{todoList.quantity + ". " + todoList.name}</span>

      <button className="todo-item">Delete</button>
    </div>
  );
}

export default TodoItem;
