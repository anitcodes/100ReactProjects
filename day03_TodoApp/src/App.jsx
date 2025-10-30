import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  // states for input fields and todos
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [todos, setTodos] = useState([]);

  // handleSubmit function to add new todos in todos list
  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "" || desc.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      title,
      desc,
      completed: false,
    };

    setTodos([...todos, newTodo]); // add new todo

    // reset input fields
    setTitle("");
    setDesc("");
  };

  // toggle complete function
  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // delete function
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="h-screen w-full bg-[url('https://images.unsplash.com/photo-1685879682686-a7369e370fa7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170')] bg-cover bg-no-repeat text-white">
      <TodoForm
        title={title}
        setTitle={setTitle}
        desc={desc}
        setDesc={setDesc}
        handleSubmit={handleSubmit} // pass handleSubmit
      />
      <TodoList
        todos={todos} // pass todos state
        toggleCompleted={toggleCompleted} // pass toggleCompleted
        deleteTodo={deleteTodo} // pass deleteTodo
      />
    </div>
  );
};

export default App;
