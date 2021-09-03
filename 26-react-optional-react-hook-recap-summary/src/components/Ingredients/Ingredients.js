import React, { useCallback, useReducer } from 'react';
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

const httpReducer = (currentState, action) => {
  switch (action.type) {
    case 'SEND':
      return { loading: true, error: false };
    case 'RESPONSE':
      return { ...currentState, loading: false };
    case 'ERROR':
      return { loading: false, error: action.error };
    case 'CLEAR':
      return { ...currentState, error: null };
    default:
      throw new Error('Should not get there!');
  }
}


function Ingredients() {
  const [userIngredients, dispatchIngredients] = useReducer(ingredientReducer, []);
  const [httpStatus, dispatchHttpStatus] = useReducer(httpReducer, { loading: false, error: null });
  // const [userIngredients, setUerIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();


  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    dispatchIngredients({ type: 'SET', ingredients: filteredIngredients });
  }, []);

  const addIngredientHandler = (ingredient) => {
    dispatchHttpStatus({ type: 'SEND' });
    fetch('https://react-http-c7642-default-rtdb.firebaseio.com/ingredients.json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ingredient)
    })
      .then(response => {
        dispatchHttpStatus({ type: 'RESPONSE' });
        return response.json();
      }).then(responseData => {
        dispatchIngredients({ type: 'ADD', ingredient: { id: responseData.name, ...ingredient } });
      });
  }

  const removeIngredientsHandler = (ingredientId) => {
    dispatchHttpStatus({ type: 'SEND' });
    fetch(`https://react-http-c7642-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json`, {
      method: 'DELETE',
    }).then(response => {
      dispatchHttpStatus({ type: 'RESPONSE' });
      dispatchIngredients({ type: 'DELETE', id: ingredientId });

    }).catch(error => {
      dispatchHttpStatus({ type: 'ERROR', error: error.message });
    });
  }

  const clearModel = () => {
    dispatchHttpStatus({ type: 'CLEAR' });
  }

  return (
    <div className="App">
      {httpStatus.error && <ErrorModal onClose={clearModel}>{httpStatus.error}</ErrorModal>}
      <IngredientForm onAddIngredient={addIngredientHandler} loading={httpStatus.loading} />

      <section>
        <Search onLoadedIngredients={filteredIngredientsHandler} />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientsHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
