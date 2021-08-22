import { useHistory, useLocation } from "react-router-dom";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
   return quotes.sort((quoteA, quoteB) => {
      if (ascending) {
         return quoteA.id > quoteB.id ? 1 : -1;
      } else {
         return quoteA.id < quoteB.id ? 1 : -1;
      }
   });
};

const QuoteList = ({ quotes }) => {
   const history = useHistory();
   const location = useLocation();

   const queryParams = new URLSearchParams(location.search);

   const isSortingAscending = queryParams.get("sort") === "asc";

   const sortedQuotes = sortQuotes(quotes, isSortingAscending);

   const changeSortHandler = () => {
      history.push("/quotes?sort=" + (isSortingAscending ? "desc" : "asc"));
   };
   return (
      <>
         <div className={classes.sorting}>
            <button onClick={changeSortHandler}>
               Sort {isSortingAscending ? "Descending" : "Ascending"}
            </button>
         </div>
         <ul className={classes.list}>
            {sortedQuotes.map(({ id, author, text }) => (
               <QuoteItem key={id} id={id} author={author} text={text} />
            ))}
         </ul>
      </>
   );
};

export default QuoteList;
