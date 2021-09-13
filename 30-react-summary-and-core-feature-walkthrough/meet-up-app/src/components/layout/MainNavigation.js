import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import FavoritesContext from '../../store/favorites-context';
import classes from "./MainNavigation.module.css";
const MainNavigation = () => {
    const context = useContext(FavoritesContext);
    const totalFavorites = context.totalFavorites;

    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li><Link to='/'>Meetups</Link></li>
                    <li><Link to='/new-meetup'>New Meetup</Link></li>
                    <li><Link to='/favorites'>Favorites <span className={classes.badge}> {totalFavorites}</span></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation
