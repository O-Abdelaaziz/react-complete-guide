import React, { useContext } from 'react'
import MeetupList from '../components/meetups/MeetupList';
import FavoritesContext from '../store/favorites-context';

const Favorites = () => {
    const context = useContext(FavoritesContext);
    const meetups=context.favorites;

    let content;
    if (context.totalFavorites === 0) {
        content = <p>You got no favorites yet. Start adding some?</p>;
      } else {
        content = <MeetupList meetups={meetups} />;
      }

    return (
        <section>
            <h1>Meetups</h1>
            {content}
        </section>
    )
}

export default Favorites
