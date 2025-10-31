import React, { useState } from "react";

const TodoItem = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  //handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(desc);

    //prevent to add null input fields
    if (title.trim() === "" || desc.trim() === "") return;

    addTodo(title, desc);

    //reset input fields
    setTitle("");
    setDesc("");
  };

  return (
    <div className="mt-6 mx-10">
      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
          className="outline-none border py-2 px-6"
          type="text"
          placeholder="Enter title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="outline-none border py-2 px-6"
          type="text"
          placeholder="Enter description..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          type="submit"
          className="py-2 px-4 bg-blue-600 text-lg font-semibold text-white rounded-full border-none cursor-pointer"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoItem;
