import React from "react";
import { useParams } from "react-router-dom";

const QuoteDetail = () => {
   const { quoteId } = useParams();
   return (
      <div>
         <h1>quote detail route</h1>
         <p>{quoteId}</p>
      </div>
   );
};

export default QuoteDetail;
