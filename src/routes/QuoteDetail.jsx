import React from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
   const { quoteId } = useParams();
   return (
      <>
         <h1>Quote Detail Route</h1>
         <Route path={`/quotes/${quoteId}/comments`} component={Comments} />
      </>
   );
};

export default QuoteDetail;
