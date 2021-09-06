import React from 'react'
import { Link } from 'react-router-dom'
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
    <div className="main">
      <h2>
        Contact List
        <Link to="/new-contact">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>
      <div className="ui celled list">{props.contacts.length === 0 && <p>No contact found!</p>}</div>
    </div>
  )
}

export default ContactList
