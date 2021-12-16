import { useParams, Route } from "react-router-dom/cjs/react-router-dom.min";
import Comments from '../components/comments/Comments'

const QuoteDetail = () => {
  const params = useParams();
  return (
    <div>
      <h1>QuoteDetail</h1>
      <p>{params.quoteId}</p>
      <Route path="/quotes/:quoteId/comments"><Comments/></Route>
    </div>
  );
};
export default QuoteDetail;
