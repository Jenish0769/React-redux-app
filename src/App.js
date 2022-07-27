import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { increment ,decrement ,initial } from './redux/actions/action'

function App() {

  const counter = useSelector((state) => state.counterReducer);

  const dispatch = useDispatch();
  return (
    <>
      <div className="App">
        <h1>count:{counter}</h1>
        
        <div className='btn'>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(initial())}>Initial</button>
        </div>
      </div>
    </>
  );
}
export default App;


