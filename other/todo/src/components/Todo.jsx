import React, { useState } from "react";
import TodoItem from "./TodoItem";
import Form from "./Form";
import TodoList from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h1 className="text-center bg-gray-200 py-4 mb-4 font-bold text-red-800 text-4xl">
        My Todo List
      </h1>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
};

export default Todo;
