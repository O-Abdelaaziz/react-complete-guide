import React from 'react'
import './Card.css';

export const Card = (props) => {
    const classess= 'card ' + props.className;
    return (
        <div className={classess}>
            {props.children}
        </div>
    )
}

export default Card;
