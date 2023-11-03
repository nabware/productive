import React, {useState} from "react";
import Quote from "./Quote"

/** Component for InspoQuote.
 *
 * State:
 *  - quote {text, author}
 *
 * Header -> InspoQuote
 **/

function InspoQuote() {
  const [quote, setQuote] = useState({text:"",author:""});

  async function getQuote(){
    const response = await fetch("https://inspo-quotes-api.herokuapp.com/quotes/random");
    const data = await response.json();

    setQuote(data.quote);
  }

  return (
      <div className="InspoQuote">
        {quote.text.length > 0 && <Quote text={quote.text} author={quote.author} />}
        <button onClick={getQuote}>{quote.text.length > 0
          ? "New Quote"
          : "Click here to get an inspirational quote!"}
        </button>
      </div>
  );
}

export default InspoQuote;
