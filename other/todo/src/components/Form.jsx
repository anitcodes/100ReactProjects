import React, { useState } from "react";

const Form = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleChange}
      className="p-4 border border-blue-300 h-16 w-140 text-center flex items-center rounded-md"
      >
        <input
          type="text"
          placeholder="Enter todo item..."
          className="text-red-700 py-2 px-4 w-100 rounded-md outline-none"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          className="py-2 px-6 bg-blue-600 text-white rounded-md mx-2 cursor-pointer hover:bg-blue-700 transition"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
