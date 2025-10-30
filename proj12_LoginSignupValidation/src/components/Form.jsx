import React, { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [users, setUsers] = [];

  // error handling
  const [error, setError] = useState("");

  // handle submit
  const submitHandler = (e) => {
    e.preventDefault();

    //Password validation
    if (password.length < 8) {
      setError("Password must be 8 digit long");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }

    if (!/[!@#$%^&*()_+]/.test(password)) {
      setError("Password must contain special character");
      return;
    }

    // prints username and password
    console.log(username);
    console.log(password);

    // Reset input fields
    setUsername("");
    setPassword("");
    setError("");
  };

  return (
    <div className="h-screen w-screen bg-gray-800 bg-cover bg-center flex items-center justify-center">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col gap-4 p-8 bg-[rgba(214, 214, 214, 0.297)] backdrop-blur-sm border border-white rounded-sm"
      >
        <h1 className="text-center text-2xl font-bold text-white tracking-widest">
          Login
        </h1>
        <input
          type="text"
          placeholder="Username"
          className="px-4 py-2 border-b border-white bg-transparent text-white outline-none w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="px-4 py-2 border-b border-white bg-transparent text-white outline-none w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <button className="bg-white py-2 rounded-md cursor-pointer hover:bg-gray-200 transition">
          Login
        </button>
        <h3 className="text-sm text-center text-gray-100">
          Don't have an account?Register
        </h3>
      </form>
    </div>
  );
};

export default Form;
