import React, { useCallback, useReducer, useMemo } from 'react';
import useHttp from '../../hooks/http';
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
  const [userIngredients, dispatchIngredients] = useReducer(ingredientReducer, []);
  const { isLoading, data, error, sendRequest } = useHttp();

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    dispatchIngredients({ type: 'SET', ingredients: filteredIngredients });
  }, []);

  const addIngredientHandler = useCallback((ingredient) => {
    // dispatchHttpStatus({ type: 'SEND' });
    // fetch('https://react-http-c7642-default-rtdb.firebaseio.com/ingredients.json', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(ingredient)
    // })
    //   .then(response => {
    //     dispatchHttpStatus({ type: 'RESPONSE' });
    //     return response.json();
    //   }).then(responseData => {
    //     dispatchIngredients({ type: 'ADD', ingredient: { id: responseData.name, ...ingredient } });
    //   });
  }, []);

  const removeIngredientsHandler = useCallback((ingredientId) => {
    // dispatchHttpStatus({ type: 'SEND' });
    sendRequest(`https://react-http-c7642-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json/`, 'DELETE')

  }, [sendRequest])

  const clearModel = useCallback(() => {
    // dispatchHttpStatus({ type: 'CLEAR' });
  }, []);

  const ingredientsList = useMemo(() => {
    return <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientsHandler} />
  }, [userIngredients, removeIngredientsHandler]);
  return (
    <div className="App">
      {error && <ErrorModal onClose={clearModel}>{error}</ErrorModal>}
      <IngredientForm onAddIngredient={addIngredientHandler} loading={isLoading} />

      <section>
        <Search onLoadedIngredients={filteredIngredientsHandler} />
        {ingredientsList}
      </section>
    </div>
  );
}

export default Ingredients;
