import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const quotes = [
   {
      id: "q1",
      author: "Peter",
      text: "Learning React is fun!",
   },
   {
      id: "q2",
      author: "Jack",
      text: "Learning React is great!",
   },
];

const Quotes = () => {
   return (
      <>
         <QuoteList quotes={quotes} />
      </>
   );
};

export default Quotes;
