import {
  useParams,
  Route,
  Link,
} from "react-router-dom/cjs/react-router-dom.min";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_DATA = [
  { id: "q1", author: "Max", text: "Learning react is Fun!" },
  { id: "q2", author: "Maximilian", text: "Learning react is Fun!" },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>no quote found</p>;
  }

  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route exact path='/quotes/:quoteId'>
      <div className="centered">
        <Link className="btn" to={`/quotes/${quote.id}/comments`}>
          View Comments
        </Link>
      </div></Route>
      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
    </div>
  );
};
export default QuoteDetail;
