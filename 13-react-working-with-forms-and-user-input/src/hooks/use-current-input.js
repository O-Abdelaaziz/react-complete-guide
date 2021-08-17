import { useState } from 'react'

const useCurrentInput = (validateValue) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [isValueTouched, setIsValueTouched] = useState(false);
    
    const isEnteredValueIsValid=validateValue(enteredValue);
    const hasError= !isEnteredValueIsValid && isValueTouched;

    const valueInputChangeHandler=(event)=>{
        setEnteredValue(event.target.value);
      }
    
    const valueBlurHandler=(event)=>{
        setIsValueTouched(true);
    }

    const reset=()=>{
        setEnteredValue('');
        setIsValueTouched(false);
    }

    return {
        value:enteredValue,
        isValid:isEnteredValueIsValid,
        hasError:hasError,
        valueInputChangeHandler:valueInputChangeHandler,
        valueBlurHandler:valueBlurHandler,
        reset:reset,
    };

}
export default useCurrentInput;