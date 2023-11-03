import React from "react";

/** Simple presentation component for a quote.
 *
 * Props:
 * - quote: like { text, author }
 *
 * InspoQuote -> Todo
 **/

function Quote({ text, author }) {
  return (
      <div className="Quote">
        <div><i>{text}-{author}</i></div>
      </div>
  );
}

export default Quote;
