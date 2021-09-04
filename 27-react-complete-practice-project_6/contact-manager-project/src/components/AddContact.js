import React from 'react'

const AddContact = () => {
    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form">
                <div className="field">
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" name="name" placeholder="contact name"/>
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" placeholder="contact email"/>
                </div>
                <button className="ui button blue">Save</button>
            </form>
        </div>
    )
}

export default AddContact
