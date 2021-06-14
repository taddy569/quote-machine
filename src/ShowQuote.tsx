import React, { FC, MouseEventHandler } from "react";

interface ShowQuotePropTypes {
  quote: string;
  author: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

function ShowQuote<FC>(props: ShowQuotePropTypes) {
  const { quote, author, handleClick } = props;
  let params: string = `https://twitter.com/intent/tweet?text="${quote}" ${props.author}`;

  return (
    <div>
      <div id="text">
        <i className="fa fa-quote-left fa-pull-left"></i>
        <p>{quote}</p>
      </div>
      <p id="author">{`- ${author} -`}</p>
      <div id="option">
        <a id="tweet-quote" href={params} target="_blank" rel="noreferrer">
          <i
            id="twitter-icon"
            className="fa fa-twitter fa-3x"
            title="Tweet this quote!"
          ></i>
        </a>
        <button id="new-quote" onClick={handleClick}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default ShowQuote;
