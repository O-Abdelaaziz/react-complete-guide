import { useDispatch, useSelector} from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {

  const stateCounter = useSelector(state => state.counter);
  const stateShowCounter = useSelector(state => state.showCounter)

  const dispatchCounter = useDispatch();

  const incrementHandler = () => {
    dispatchCounter({type:'increment'});
  }

  const increaseHandler = () =>{
    dispatchCounter({type:'increase',value:10})
  }

  const decrementHandler = () => {
    dispatchCounter({type:'decrement'});
  }


  const toggleCounterHandler = () => {
    dispatchCounter({type:'toggle'});
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
