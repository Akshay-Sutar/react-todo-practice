import React, { useState } from "react";

export default function Todo(props) {
  const [todo, setTodo] = useState("");

  const clickHandler = (e) => {
    if (todo.length === 0) {
      return;
    }

    const todoItem = { title: todo, id: Date.now(), comments: [] };
    props.addNewTodo(todoItem);
    setTodo("");
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Todo Title"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={clickHandler}>Add Todo</button>
      </div>
    </div>
  );
}
