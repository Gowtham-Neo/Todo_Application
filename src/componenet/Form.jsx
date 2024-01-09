import { useState } from "react";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({name:"",done:false});


  function handleSubit(event) {
    event.preventDefault();
    if (!todo.name) {
      alert("Fill the todo");
      return null
    }

    setTodos([...todos, todo]);
    setTodo({name:"",done:false});
  }
  return (
    <>
      <div className="flex flex-row justify-center w-full mt-24">
        <form className="flex w-1/2 p-10 border border-black border-spacing-x-9 justify-evenly rounded-xl bg-slate-500">
          <input
            type="text"
            onChange={(e) => setTodo({name:e.target.value,done:false})}
            name="task"
            value={todo.name}
            required
            placeholder="Enter Todo ..."
            className="w-1/2 h-10 px-4 font-mono font-bold text-left text-black border border-black outline-none rounded-xl"
          />
          <button
            type="submit"
            className="w-1/4 font-mono font-semibold text-center bg-green-700 border rounded-md "
            onClick={(event) => handleSubit(event)}
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
}
