import React, { useState } from 'react';

const FavoritesContext = React.createContext({
    favorites: [],
    totalFavorites: 0
});

const FavoritesContextProvider = (props) => {
    const [userFavorites, setUserFavorites] = useState([]);

    const addFavoritesHandler = (favoriteMeetup) => {
        setUserFavorites((prevFavorites) => {
            return prevFavorites.concat(favoriteMeetup);
        });
    }

    const removeFavoritesHandler = (meetupId) => {
        setUserFavorites((prevFavorites) => {
            return prevFavorites.filter(meetup => meetup.id !== meetupId);
        });

    }

    const itemIsFavoriteHandler = (meetupId) => {
        return userFavorites.some(meetup => meetup.id === meetupId)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
    }

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContextProvider;