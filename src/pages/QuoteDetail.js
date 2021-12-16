import {
  useParams,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom.min";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_DATA = [
  { id: "q1", author: "Max", text: "Learning react is Fun!" },
  { id: "q2", author: "Maximilian", text: "Learning react is Fun!" },
];

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();
  const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId);
  console.log(match);
  if (!quote) {
    return <p>no quote found</p>;
  }

  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route exact path={match.path}>
        <div className="centered">
          <Link className="btn" to={`${match.url}/comments`}>
            View Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};
export default QuoteDetail;
