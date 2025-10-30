import React from "react";

const TodoList = ({ todos, toggleCompleted, deleteTodo }) => {
  return (
    <div
      className="min-h-100 max-h-120 bg-white/10 backdrop-blur-sm mt-8 mx-10 py-4 px-10 flex flex-col gap-2 overflow-y-auto border"
      id="todoListContainer"
    >
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="p-4 bg-white/10 backdrop-blur-sm min-h-14 rounded-sm flex items-center justify-between"
        >
          <h1
            className={`text-2xl font-bold ${
              todo.completed ? "line-through" : ""
            }`}
          >
            {todo.title}
          </h1>
          <h2 className={`text-lg ${todo.completed ? "line-through" : ""}`}>
            {todo.desc}
          </h2>

          <div className="flex gap-4">
            <button
              onClick={() => toggleCompleted(todo.id)}
              className="py-2 px-4 bg-green-600 text-lg font-semibold rounded-lg"
            >
              {todo.completed ? "Undo" : "Completed"}
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="py-2 px-4 bg-red-600 text-lg font-semibold rounded-lg"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
