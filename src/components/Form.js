import React, { useState } from "react";

function Form({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;

    const newItem = { name, quantity, isChecked: false, id: Date.now() };
    setName("");
    setQuantity(1);
    onAddItem(newItem);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 50 }, (_, i) => (
          <option value={i + 1} key={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        className="form-control add-task"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add task..."
      />
      <span>
        <button className="addBtn">Add</button>
      </span>
    </form>
  );
}

export default Form;
