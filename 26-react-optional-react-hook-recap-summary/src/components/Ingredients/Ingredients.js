import React, { useCallback, useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

function Ingredients() {
  const [userIngredients, setUerIngredients] = useState([]);

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    setUerIngredients(filteredIngredients)
  }, []);

  const addIngredientHandler = (ingredient) => {
    fetch('https://react-http-c7642-default-rtdb.firebaseio.com/ingredients.json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ingredient)
    }).then(response => {
      response.json();
    }).then(responseData => {
      setUerIngredients(prevIngredients => {
        return [...prevIngredients, { id: responseData.title.toString(), ...ingredient }]
      });
    });
  }

  const removeIngredientsHandler = (ingredientId) => {
    fetch(`https://react-http-c7642-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json`, {
      method: 'DELETE',
    }).then(response => {
      setUerIngredients((prevIngredients) => {
        return prevIngredients.filter(ingredient => ingredient.id !== ingredientId)
      });
    });
  }

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search onLoadedIngredients={filteredIngredientsHandler} />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientsHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
