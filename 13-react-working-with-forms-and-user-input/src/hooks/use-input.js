import { useReducer } from "react";

const initialInputState={value:'',isTouched:false};

const inputStateReducer= (stateSnapshot,action)=>{
    if(action.type==='INPUT'){
        return {value:action.value,isTouched:stateSnapshot.isTouched};
    }
    if(action.type==='BLUR'){
        return {value:stateSnapshot.value,isTouched:true};
    }
    if(action.type==='RESET'){
        return {value:'',isTouched:false}
    }
    return initialInputState;
}

const useInput = (validateValue) => {

    const [inputState, dispatchValue] = useReducer(inputStateReducer, initialInputState);

    const valueIsValid = validateValue(inputState.value);
    const hasError= !valueIsValid && inputState.isTouched;

    const valueInputChangeHandler = (event) =>{
        dispatchValue({type:'INPUT',value:event.target.value});
    }
    
      const valueInputBlurHandler=(event)=>{
        dispatchValue({type:'BLUR'});
    }

    const reset=()=>{
        dispatchValue({type:'RESET'});
    }

    return {
        value:inputState.value,
        isValid:valueIsValid,
        hasError,
        valueInputChangeHandler,
        valueInputBlurHandler,
        reset,
    };
}

export default useInput;