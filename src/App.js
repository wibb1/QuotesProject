import { Redirect, Route, Switch } from "react-router-dom";
import QuoteDetail from "./pages/QuoteDetail";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Redirect to="/quotes" />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route exact path="/quotes">
          <AllQuotes />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
