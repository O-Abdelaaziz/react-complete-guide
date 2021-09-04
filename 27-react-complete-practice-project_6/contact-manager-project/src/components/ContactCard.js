import React from 'react'
import classes from "./ContactCard.module.css";
import user from '../images/user.png';
const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
                <div className="header">{name}</div>
                <div >{email}</div>
            </div>
            <i onClick={()=> props.clickHandler(id)} className={[classes.trash, "trash alternate outline icon"].join(" ")}></i>
        </div>
    )
}

export default ContactCard
