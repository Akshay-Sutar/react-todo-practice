import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import TodoList from "./TodoList";

export default function Todos() {
  const [todos, setTodo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasPrev, setHasPrev] = useState(false);
  const [hasNext, setHasNext] = useState(false);
  const todosPerPage = 5;

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  useEffect(() => {
    if(currentTodos.length === 0 && todos.length > 0) {
      setCurrentPage(prev => prev-1)
    }

    if (indexOfFirstTodo >= 5) {
      setHasPrev(true);
    } else {
      setHasPrev(false);
    }

    if (indexOfLastTodo < todos.length) {
      setHasNext(true);
    } else {
      setHasNext(false);
    }
  }, [indexOfLastTodo, indexOfFirstTodo,todos.length,currentTodos.length]);

  const addNewTodo = (todoItem) => {
    let todoList = [...todos, todoItem];
    setTodo(todoList);
  };

  const removeTodo = (id) => {
    let todoList = todos.filter((todo) => todo.id !== id);
    setTodo(todoList);
  };

  const addComment = (id, comment) => {
    const todoItem = todos.find((todo) => todo.id === id);
    todoItem.comments.push(comment);
  };

  const prevClickHandle = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const nextClickHandle = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div>
      <h4>Todos</h4>
      <Todo addNewTodo={addNewTodo} />
      <TodoList
        todos={currentTodos}
        removeTodo={removeTodo}
        addComment={addComment}
      />
      <button disabled={hasPrev ? "" : "disabled"} onClick={prevClickHandle}>
        Prev 5
      </button>
      <button disabled={hasNext ? "" : "disabled"} onClick={nextClickHandle}>
        Next 5
      </button>
    </div>
  );
}
