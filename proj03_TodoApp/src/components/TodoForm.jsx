import React from "react";

const TodoForm = ({ title, setTitle, desc, setDesc, handleSubmit }) => {
  return (
    <div className="border-0 border-b-2 py-4 px-10 mx-10 bg-white/10 backdrop-blur-lg flex items-center gap-6">
      <input
        className="outline-none border bg-black py-2 px-6 rounded-lg"
        type="text"
        placeholder="Enter title of todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="outline-none border bg-black py-2 px-6 min-w-100 rounded-lg"
        type="text"
        placeholder="Enter description of todo..."
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button
        onClick={handleSubmit} // button uses handleSubmit from props
        className="border border-white py-2 px-6 bg-black text-lg font-semibold rounded-full cursor-pointer hover:bg-black/50 hover:border-green-500 transition-all"
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoForm;
