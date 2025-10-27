import React from "react";

const TodoItem = ({ item }) => {
  return (
    <div>
      <div className="flex justify-between bg-blue-800 text-white text-xl font-bold mt-2 mx-8 py-2 px-4 rounded-md">
        {item}
        <div className="flex gap-2">
        <button className="bg-green-500 py-2 px-4 rounded-md cursor-pointer hover:bg-green-600">
          Edit
        </button>
        <button className="bg-red-500 py-2 px-4 rounded-md cursor-pointer hover:bg-red-600">
          Delete
        </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
