import React from "react";

const TodoList = ({ todos, deleteTodo, completedTodo }) => {
  return (
    <div className="min-h-100 max-h-110 mx-8 my-10 bg-gray-200 overflow-auto flex flex-col gap-2 p-4">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="min-h-14 bg-white py-2 px-4 flex items-center justify-between"
        >
          <h1 className={todo.completed ? "line-through" : ""}>{todo.title}</h1>
          <h2 className={todo.completed ? "line-through" : ""}>{todo.desc}</h2>

          <div className="flex items-center gap-4">
            <button
              onClick={() => completedTodo(todo.id)}
              className="bg-green-200 w-10 h-10 rounded-full border-2 border-green-800 cursor-pointer"
            >
              {todo.completed ? "❌" : "✔"}
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="py-2 px-4 bg-red-500 rounded-full font-semibold text-white cursor-pointer"
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
