import React, { useEffect, useRef, useState } from "react";

export default function TodoItem({ todo, removeTodo, addComment }) {
  const [showAddComment, setShowAddComment] = useState(false);
  const commentReff = useRef("");

  const completeTodo = (id) => {
    removeTodo(id);
  };

  const showCommentHandler = () => {
    setShowAddComment((prevState) => !prevState);
  };

  const addCommentHandler = (id) => {
    const comment = commentReff.current.value;
    addComment(id, comment);
    commentReff.current.value = "";
    setShowAddComment((prevState) => !prevState);
  };

  useEffect(() => {
    if (showAddComment) {
      commentReff.current.focus();
    }
  }, [showAddComment]);

  const style = {
    padding: "1rem",
    border: "1px solid black",
    margin: "1rem",
  };

  return (
    <div key={todo.id} style={style}>
      <span>{todo.title}</span>
      <button onClick={(e) => completeTodo(todo.id)}>Complete</button>
      <button onClick={showCommentHandler}>Comment</button>
      {showAddComment && (
        <div>
          <textarea ref={commentReff}></textarea>
          <br />
          <button onClick={(e) => addCommentHandler(todo.id)}>
            Add Comment
          </button>
        </div>
      )}
      {todo.comments.length > 0 && (
        <div>
          <ul>
            {todo.comments.map((comment, idx) => {
              return <li key={idx}>{comment}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
