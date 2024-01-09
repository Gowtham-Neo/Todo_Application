import { useState } from "react";
import Form from "./Form";
import Footer from "./Footer";
import TodoList from "./TodoList";
export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodo=todos.filter(todo => todo.done===true).length
  const todoList=todos.filter(todo=> todo).length
  return (
    <>
        <Form todos={todos} setTodos={setTodos}/>
        <TodoList todos={todos} setTodos={setTodos}/>
        <Footer completedTodo={completedTodo} todoList={todoList}/>
    </>
  );
}
