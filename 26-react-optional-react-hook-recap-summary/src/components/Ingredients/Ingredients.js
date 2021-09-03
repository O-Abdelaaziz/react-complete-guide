import React, { useCallback, useReducer, useState } from 'react';
import ErrorModal from '../UI/ErrorModal';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const ingredientReducer = (currentState, action) => {
  switch (action.type) {
    case 'SET':
      return action.ingredients;
    case 'ADD':
      return [...currentState, action.ingredient];
    case 'DELETE':
      return currentState.filter(ingredient => ingredient.id !== action.id);
    default:
      throw new Error('Should not get there!');
  }
}

function Ingredients() {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  // const [userIngredients, setUerIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();


  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    // setUerIngredients(filteredIngredients)
    dispatch({type:'SET',ingredients:filteredIngredients});
  }, []);

  const addIngredientHandler = (ingredient) => {
    setIsLoading(true);
    fetch('https://react-http-c7642-default-rtdb.firebaseio.com/ingredients.json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ingredient)
    })
      .then(response => {
        setIsLoading(false);
        return response.json();
      }).then(responseData => {
        // setUerIngredients(prevIngredients => [...prevIngredients, { id: responseData.name, ...ingredient }]);
        dispatch({type:'ADD',ingredient:{ id: responseData.name, ...ingredient }});
      });
  }

  const removeIngredientsHandler = (ingredientId) => {
    setIsLoading(true);
    fetch(`https://react-http-c7642-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json`, {
      method: 'DELETE',
    }).then(response => {
      setIsLoading(false);
      // setUerIngredients((prevIngredients) => {return prevIngredients.filter(ingredient => ingredient.id !== ingredientId)});
      dispatch({type:'DELETE',id:ingredientId});

    }).catch(error => {
      setError(error.message);
      setIsLoading(false);
    });
  }

  const clearModel = () => {
    setError(null)
  }

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearModel}>{error}</ErrorModal>}
      <IngredientForm onAddIngredient={addIngredientHandler} loading={isLoading} />

      <section>
        <Search onLoadedIngredients={filteredIngredientsHandler} />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientsHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
