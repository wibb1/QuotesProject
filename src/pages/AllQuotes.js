import QuoteList from '../components/quotes/QuoteList'

const DUMMY_DATA = [
  {id:'q1', author: "Max", text: "Learning react is Fun!"},
  {id:'q2', author: "Maximilian", text: "Learning react is Fun!"}
]

const AllQuotes = () => {
  return (
    <div>
      <h1>AllQuotes</h1><QuoteList quotes={DUMMY_DATA}/>
    </div>
  );
};
export default AllQuotes;
