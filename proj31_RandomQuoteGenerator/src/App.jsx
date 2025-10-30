import React, { useEffect, useState } from "react";

const App = () => {
  const [quote, setQuote] = useState(null);

  //function to call api
  const getRandomQuotes = async () => {
    try {
      const url = "https://dummyjson.com/quotes/random";
      const response = await fetch(url);
      const data = await response.json();
      setQuote(data);
    } catch (error) {
      console.log("Error fetching data from api", error);
    }
  };

  return (
    <div>
      <button
        onClick={getRandomQuotes}
        type="submit"
        className="py-2 px-6 bg-red-700 text-white font-semibold text-lg"
      >
        Get Quote
      </button>

      {quote && (
        <div>
          <p>"{quote.quote}"</p>
          <p>— {quote.author}</p>
        </div>
      )}
    </div>
  );
};

export default App;
