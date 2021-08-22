import React from "react";
import { Link, Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

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

const QuoteDetail = () => {
   const { quoteId } = useParams();
   const quote = quotes.find((quote) => quote.id === quoteId);
   if (!quote) {
      return <p>No quote found!</p>;
   }
   return (
      <>
         <HighlightedQuote {...quote} />
         <Route path={`/quotes/${quoteId}`} exact>
            <div className="centered">
               <Link to={`/quotes/${quoteId}/comments`} className="btn--flat">
                  Load Comments
               </Link>
            </div>
         </Route>
         <Route path={`/quotes/${quoteId}/comments`} component={Comments} />
      </>
   );
};

export default QuoteDetail;
