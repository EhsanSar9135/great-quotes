import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const QuoteList = ({ quotes }) => {
   return (
      <>
         <ul className={classes.list}>
            {quotes.map(({ id, author, text }) => (
               <QuoteItem key={id} id={id} author={author} text={text} />
            ))}
         </ul>
      </>
   );
};

export default QuoteList;
