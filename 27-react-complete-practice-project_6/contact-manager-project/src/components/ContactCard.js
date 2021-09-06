import React from 'react'
import classes from "./ContactCard.module.css";
import user from '../images/user.png';
import { Link } from 'react-router-dom';
const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
                <Link to={{ pathname: `/contacts/${id}`, state: { contact: props.contact } }}>
                    <div className="header">{name}</div>
                    <div >{email}</div>
                </Link>
            </div>
            <i onClick={() => props.clickHandler(id)} className={[classes.trash, "trash alternate outline icon"].join(" ")}></i>

            <Link to={{ pathname: `/edit/${id}`, state: { contact: props.contact } }}>
                <i className={[classes.edit, "edit alternate outline icon"].join(" ")}></i>
            </Link>
        </div>
    )
}

export default ContactCard
