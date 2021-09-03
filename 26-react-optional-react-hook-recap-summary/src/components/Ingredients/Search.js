import React, { useEffect, useState } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const { onLoadedIngredients } = props;
  const [searchInput, setSearchInput] = useState('');

  const onChangeSearchInput = (event) => {
    setSearchInput(event.target.value);
  }

  useEffect(() => {
    const query = searchInput.length === 0 ? '' : `?orderBy="title"&equalTo="${searchInput}"`;
    fetch('https://react-http-c7642-default-rtdb.firebaseio.com/ingredients.json' +query)
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
        onLoadedIngredients(loadedIngredients);
      });
  }, [searchInput, onLoadedIngredients]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" value={searchInput} onChange={onChangeSearchInput} />
        </div>
      </Card>
    </section>
  );
});

export default Search;
