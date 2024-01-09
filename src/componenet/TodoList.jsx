import TodoItem from "./Todoitem";
export default function ({ todos, setTodos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <>
      {sortedTodos.map((todo) => (
        <TodoItem
          key={Math.random()}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </>
  );
}
