import React, { useRef } from 'react'
import { useHistory } from 'react-router';

const AddContact = (props) => {
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
        props.onAddContact({ name, email });

        nameInputRef.current.value = '';
        emailInputRef.current.value = '';
        history.push('/contacts')
    }
    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={submitHandler}>
                <div className="field">
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" name="name" placeholder="contact name" ref={nameInputRef} />
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" placeholder="contact email" ref={emailInputRef} />
                </div>
                <button className="ui button blue">Save</button>
            </form>
        </div>
    )
}

export default AddContact
