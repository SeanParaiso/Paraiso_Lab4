import React, { useState } from "react";
import "./App.css";
// import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import TodoList from "./components/TodoList";
import NavLink from "./components/NavLink";
import Form from "./components/Form";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  return (
    <div className="container">
      <div className="card card-white">
        <div className="card-body">
          <h1>TO-DO LIST</h1>
          <h6>Tasks to accomplish</h6>
          <Form onAddItem={handleAddItem} />
          <ul className="nav nav-pills todo-nav">
            <NavLink />
          </ul>
          <TodoList items={items} />
        </div>
      </div>
    </div>
  );
}

export default App;
