import React, { useCallback, useState } from 'react';
import ErrorModal from '../UI/ErrorModal';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

function Ingredients() {
  const [userIngredients, setUerIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    setUerIngredients(filteredIngredients)
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
        setUerIngredients(prevIngredients => [...prevIngredients, { id: responseData.name, ...ingredient }]
        );
      });
  }

  const removeIngredientsHandler = (ingredientId) => {
    setIsLoading(true);
    fetch(`https://react-http-c7642-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json`, {
      method: 'DELETE',
    }).then(response => {
      setIsLoading(false);
      setUerIngredients((prevIngredients) => {
        return prevIngredients.filter(ingredient => ingredient.id !== ingredientId)
      });
    }).catch(error => {
      setError(error.message);
      setIsLoading(false);
    });
  }

  const clearModel = ()=>{
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
