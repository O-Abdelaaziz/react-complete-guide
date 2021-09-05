import React from 'react'
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import user from '../images/user.png';

const ContactDetail = (props) => {
    const location = useLocation();
    const { name, email } = location.state.contact;
    console.log(location)
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img className="ui avatar image" src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
            <div className="center-div">
                <Link to='/'>
                    <button className="ui button blue center">Back to contact list</button>
                </Link>
            </div>
        </div>
    )
}

export default ContactDetail
