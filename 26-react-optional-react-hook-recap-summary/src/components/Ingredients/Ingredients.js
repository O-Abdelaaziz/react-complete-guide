import React, { useCallback, useReducer, useMemo, useEffect } from 'react';
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
  const { isLoading, data, error, sendRequest, reqExtra, reqIdentifier ,clear} = useHttp();

  useEffect(() => {
    if (!isLoading && !error && reqIdentifier === 'REMOVING') {
      dispatchIngredients({ type: 'DELETE', id: reqExtra });
    } else if (!isLoading && !error && reqIdentifier === 'ADDING') {
      dispatchIngredients({ type: 'ADD', ingredient: { id: data.name, ...reqExtra } });
    }
  }, [data, reqExtra, reqIdentifier, isLoading ,error])

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    dispatchIngredients({ type: 'SET', ingredients: filteredIngredients });
  }, []);

  const addIngredientHandler = useCallback((ingredient) => {
    sendRequest('https://react-http-c7642-default-rtdb.firebaseio.com/ingredients.json',
      'POST', JSON.stringify(ingredient), ingredient, 'ADDING');
  }, [sendRequest]);

  const removeIngredientsHandler = useCallback((ingredientId) => {
    sendRequest(`https://react-http-c7642-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json/`, 'DELETE'
      , null, ingredientId, 'REMOVING');

  }, [sendRequest])


  const ingredientsList = useMemo(() => {
    return <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientsHandler} />
  }, [userIngredients, removeIngredientsHandler]);
  return (
    <div className="App">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <IngredientForm onAddIngredient={addIngredientHandler} loading={isLoading} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        {ingredientsList}
      </section>
    </div>
  );
}

export default Ingredients;
