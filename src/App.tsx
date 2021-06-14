import React, { FC, useState, useEffect } from "react";
import ShowQuote from "./ShowQuote";

function App<FC>() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const handleFetchNewQuote = async () => {
    const response = await fetch("https://favqs.com/api/qotd");
    const data = await response.json();

    setQuote(data.quote.body);
    setAuthor(data.quote.author);
  };

  useEffect(() => {
    handleFetchNewQuote();
  }, []);

  return (
    <div id="quote-box">
      <ShowQuote
        quote={quote}
        author={author}
        handleClick={handleFetchNewQuote}
      />
    </div>
  );
}

export default App;
