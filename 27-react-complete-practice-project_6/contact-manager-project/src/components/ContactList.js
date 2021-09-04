import React from 'react'
import ContactCard from './ContactCard'

const ContactList = (props) => {

    const removeContact = (id) => {
        props.onRemove(id)
    }

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard clickHandler={removeContact} key={contact.id} contact={contact} />
        )
    });

    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    )
}

export default ContactList
