import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory()

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);

    history.push('/quotes')
  };

  return (
    <div>
      <h1>New Quote</h1>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </div>
  );
};
export default NewQuote;
