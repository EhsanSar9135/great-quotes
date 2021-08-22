import React from "react";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
   const onAddQuote = (quoteData) => {
      console.log(quoteData);
   };
   return (
      <>
         <QuoteForm onAddQuote={onAddQuote} />
      </>
   );
};

export default NewQuote;
