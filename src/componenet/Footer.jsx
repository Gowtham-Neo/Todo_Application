export default function Footer({ todoList, completedTodo }) {
  return (
    <div className="h-auto mb-20">
      <div className="fixed bottom-0 left-0 right-0 flex flex-row justify-around p-4 font-mono text-lg font-medium text-orange-500 bg-black">
        <h2>Total Number of todos: {todoList}</h2>
        <h2>Completed Todos: {completedTodo}</h2>
      </div>
    </div>
  );
}
