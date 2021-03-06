import TodoItem from "./TodoItem";

export default function TodoList({ todos, removeTodo, addComment }) {
    const style={minHeight:'250px', border:'1px solid black',margin:'1rem'};
  return (
    <div style={style}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} addComment={addComment} />
      ))}
    </div>
  );
}
