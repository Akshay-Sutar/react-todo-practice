import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    if (todo.length === 0) {
      return;
    }

    const todoItem = { title: todo, id: Date.now(), comments: [] };
    dispatch({type:'ADD_TODO',payload:todoItem});
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
