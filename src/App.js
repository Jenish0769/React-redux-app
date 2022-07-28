import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { increment, decrement, initial } from './redux/actions/action'

function App() {

  const [number, setNumber] = useState(1)

  const counter = useSelector((state) => state.counterReducer);

  const dispatch = useDispatch();
  return (
    <>
      <div className="App">
        <h1>count:{counter}</h1>
        <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
        <div className='btn'>
          <button onClick={() => dispatch(increment(number))}>Increment by {number}</button>
          <button onClick={() => dispatch(decrement(number))}>Decrement by {number}</button>
          <button onClick={() => dispatch(initial())}>Initial</button>
        </div>
      </div>
    </>
  );
}
export default App;


