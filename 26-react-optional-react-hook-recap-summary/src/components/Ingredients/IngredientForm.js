import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  // const [titleInput, setTitleInput] = useState('');
  // const [amountInput, setAmount] = useState('');
  const [inputState,setInputState] = useState({ title: '', amount: '' });

  const titleInputChangeHandler = (event) => {
    //setTitleInput(event.target.value);
    const newTitle=event.target.value;
    setInputState((prevState) => {
      return { title: newTitle, amount: prevState.amount }
    });
    console.log(inputState.title);
  }

  const amountInputChangeHandler = (event) => {
    //setAmount(event.target.value);
    const newAmount=event.target.value;
    setInputState((prevState) => {
      return { amount: newAmount, title: prevState.title }
    });
    console.log(inputState.amount);
  }

  const submitHandler = event => {
    event.preventDefault();
    // ...
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title" value={inputState.title} onChange={titleInputChangeHandler} />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" value={inputState.amount} onChange={amountInputChangeHandler} />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
