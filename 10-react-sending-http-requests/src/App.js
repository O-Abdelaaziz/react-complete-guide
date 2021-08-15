import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchMoviesHandler() {
    console.log('button clicked');
    setIsLoading(true);
    setError(null);
    try {
      const response =await fetch('https://swapi.dev/api/films');
      
      if(!response.ok){
        throw new Error('Something went wrong!');
      }

      const data= await response.json();

      const transformedMovies=data.results.map(movie=>{
        return{
          id:movie.episode_id,
          title:movie.title,
          releaseDate:movie.release_date,
          openingText:movie.opening_crawl,

        };
      });

    setMovies(transformedMovies);

    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);

   }

  // you can use this and avoid inline check section element
  //  let content = <p>Found no movies.</p>;

  //  if (movies.length > 0) {
  //    content = <MoviesList movies={movies} />;
  //  }
 
  //  if (error) {
  //    content = <p>{error}</p>;
  //  }
 
  //  if (isLoading) {
  //    content = <p>Loading...</p>;
  //  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length>0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length===0 && !error && <p>found no movies!</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>is loading ...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
