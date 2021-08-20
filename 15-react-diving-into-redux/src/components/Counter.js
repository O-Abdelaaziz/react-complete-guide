import { Component } from 'react';
import { useDispatch, useSelector, connect} from 'react-redux';
import classes from './Counter.module.css';

// const Counter = () => {

//   const stateCounter = useSelector(state => state.counter);

//   const dispatchCounter = useDispatch();

//   const incrementHandler= () => {
//     dispatchCounter({type:'increment'});
//   }
//   const decrementHandler= () => {
//     dispatchCounter({type:'decrement'});
//   }


//   const toggleCounterHandler = () => {};

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>
//         {stateCounter}
//       </div>
//       <div>
//         <button onClick={incrementHandler}>Increment</button>
//         <button onClick={decrementHandler}>Decrement</button>
//       </div>
    
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

class Counter extends Component{

  incrementHandler(){
        this.props.increment();
  }

  decrementHandler(){
        this.props.decrement();
  }

  toggleCounterHandler(){
        
  }

  render(){
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>
          {this.props.stateCounter}
        </div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
      
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }

}
const mapStateToProps=(state)=>{
  return {
    stateCounter:state.counter,
  };
}
const mapDispatchToProps= (dispatch)=>{
  return {
    increment:()=>dispatch({type:'increment'}),
    decrement:()=>dispatch({type:'decrement'}),
  };

}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
