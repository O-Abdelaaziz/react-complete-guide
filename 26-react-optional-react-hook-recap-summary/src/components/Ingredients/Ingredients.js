import React, { useEffect, useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

function Ingredients() {
  const [userIngredients, setUerIngredients] = useState([]);

  useEffect(() => {
    fetch('https://react-http-c7642-default-rtdb.firebaseio.com/ingredients.json')
      .then(
        response => response.json()
      ).then(responseData => {
        const loadedIngredients = [];
        for (const key in responseData) {
          loadedIngredients.push({
            id: key,
            title: responseData[key].title,
            amount: responseData[key].amount,
          });
        }
        setUerIngredients(loadedIngredients);
      });
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
        return [...prevIngredients, { id: responseData.name.toString(), ...ingredient }]
      });
    });

  }
  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList ingredients={userIngredients} onRemoveItem={() => { }} />
      </section>
    </div>
  );
}

export default Ingredients;
