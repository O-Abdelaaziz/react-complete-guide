import { useDispatch, useSelector} from 'react-redux';
import { counterActions } from '../store';
import classes from './Counter.module.css';

const Counter = () => {

  const stateCounter = useSelector(state => state.counter);
  const stateShowCounter = useSelector(state => state.showCounter)

  const dispatchCounter = useDispatch();

  const incrementHandler = () => {
    dispatchCounter(counterActions.increment());
  }

  const increaseHandler = () =>{
    dispatchCounter(counterActions.increase(10));
  }

  const decrementHandler = () => {
    dispatchCounter(counterActions.decrement());
  }


  const toggleCounterHandler = () => {
    dispatchCounter(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {stateShowCounter && 
        <div className={classes.value}>
          {stateCounter}
        </div>
      }
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
