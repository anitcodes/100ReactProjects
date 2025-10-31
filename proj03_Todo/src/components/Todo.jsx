import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  // function to add new todo
  const addTodo = (title, desc) => {
    const newTodo = {
      id: Date.now(),
      title,
      desc,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  //function to complete todo
   const completedTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };


  // function to delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <TodoItem addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} completedTodo={completedTodo} />
    </div>
  );
};

export default Todo;
