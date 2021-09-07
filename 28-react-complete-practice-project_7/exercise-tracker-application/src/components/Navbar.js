import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className={classes['main-nav']}>
            <NavLink to='/home' activeClassName={classes['active-style']}>Home</NavLink>
            <NavLink to='/create-exercise' activeClassName={classes['active-style']}>Create Exercise</NavLink>
        </nav>
    )
}

export default Navbar
