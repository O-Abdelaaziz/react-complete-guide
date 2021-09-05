import { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { uuid } from 'uuidv4';
import './App.css';
import AddContact from './components/AddContact';
import ContactDetail from './components/ContactDetail';
import ContactList from './components/ContactList';
import Header from './components/Header';

const LOCAL_STORAGE_KEY = "contacts"
function App(props) {
  //const getContacts=localStorage.getItem(LOCAL_STORAGE_KEY);
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts(prevContacts => {
      return [...prevContacts, { id: uuid(), ...contact }];
    })
  }

  const removeHandler = (id) => {
    const newContact = contacts.filter(contact => contact.id !== id);
    setContacts(newContact);
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) {
      setContacts(retrieveContacts);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts])

  return (
    <div className="ui container">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/contacts" />
        </Route>
        <Route path="/contacts" exact>
          <ContactList contacts={contacts} onRemove={removeHandler} />
        </Route>
        <Route path="/contacts/:id">
          <ContactDetail />
        </Route>
        <Route path="/new-contact">
          <AddContact onAddContact={addContactHandler} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
