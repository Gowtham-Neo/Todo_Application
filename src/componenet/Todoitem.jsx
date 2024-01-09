import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import Footer from "./Footer";
import TodoList from "./TodoList";
export default function TodoItem({ todo, todos, setTodos }) {
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  function handleDelete(todo) {
    setTodos(todos.filter((item) => todo !== item));
  }
  function handleDone(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="flex justify-start w-2/5 h-16 p-4 mt-4 border rounded-lg cointainer border-gray-950 bg-zinc-400">
          <h2
            className={`text-xl font-mono text-black font-medium hover:text-gray-500 transition duration-400 ${todo.done ? " line-through" : ""} `}
            onClick={() => handleDone(todo.name)}
          >
            {todo.name}
          </h2>
          <button onClick={(e) => handleDelete(todo)}>
            <RiDeleteBinLine size={24} className="right-2" />
          </button>
        </div>
      </div>
      
    </>
  );
}
