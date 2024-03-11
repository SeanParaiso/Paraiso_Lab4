import React from "react"
import TodoItem from "./TodoItem"

function TodoList({ items, onDeleteItem }) {
  return (
    <div className="todo-list">
      {items.map((item) => (
        <TodoItem key={item.id} todoList={item} onDeleteItem={onDeleteItem} />
      ))}
    </div>
  )
}

export default TodoList
