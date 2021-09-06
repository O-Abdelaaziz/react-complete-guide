import React, { useRef } from 'react'
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const EditContact = (props) => {
    const location = useLocation();
    const { id, name, email } = location.state.contact;
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const history = useHistory();

    const submitHandler = (event) => {
        event.preventDefault();
        const name = nameInputRef.current.value;
        const email = emailInputRef.current.value;

        if (name === '' || email === '') {
            alert("name or email can't be empty!");
            return;
        }
        props.onUpdateContact({id, name, email });

        nameInputRef.current.value = '';
        emailInputRef.current.value = '';
        history.push('/contacts')
    }
    return (
        <div className="ui main">
            <h2>Update Contact
                <Link to="/">
                    <button onClick={() => { history.push('/') }} className="ui button blue right">Show Contacts</button>
                </Link>
            </h2>
            <form className="ui form" onSubmit={submitHandler}>
                <div className="field">
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" name="name" placeholder="contact name" ref={nameInputRef} defaultValue={name} />
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" placeholder="contact email" ref={emailInputRef} defaultValue={email} />
                </div>
                <button className="ui button blue">Edit</button>
            </form>
        </div>
    )
}

export default EditContact
