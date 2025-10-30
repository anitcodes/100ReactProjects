import React, { useState } from "react";

const App = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  const handleJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await response.json();
      setJoke(`${data.setup} - ${data.punchline}`);
    } catch (error) {
      setJoke("Failed to fetch a joke. Try again!");
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 px-6">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        🤣 Joke Generator
      </h1>

      <button
        onClick={handleJoke}
        disabled={loading}
        className="py-3 px-8 bg-white text-green-600 font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-green-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Loading..." : "Generate Joke"}
      </button>

      {joke && (
        <div className="mt-10 max-w-xl bg-white bg-opacity-90 backdrop-blur-md shadow-2xl rounded-2xl p-6 text-center text-gray-800 text-lg font-medium animate-fadeIn">
          {joke}
        </div>
      )}
    </div>
  );
};

export default App;
