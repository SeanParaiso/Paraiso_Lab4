import React from "react"

function TodoItem({ todoList, onDeleteItem }) {
  return (
    <div className="todo-item">
      <div className="checker">
        <span className="span">
          <input className="checkbox" type="checkbox" />
        </span>
      </div>
      <span>{todoList.quantity + ". " + todoList.name}</span>

      <button className="todo-item" onClick={() => onDeleteItem(todoList.id)}>
        Delete
      </button>

      <button className="todo-item">Done</button>
    </div>
  )
}

export default TodoItem
