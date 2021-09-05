import { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { uuid } from 'uuidv4';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Header from './components/Header';

const LOCAL_STORAGE_KEY = "contacts"
function App() {
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
    console.log('run from get cone');
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) {
      setContacts(retrieveContacts);
    }
  }, [])

  useEffect(() => {
    console.log('run from set cone');
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts])

  return (
    <div className="ui container">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/contacts" />
        </Route>
        <Route path="/contacts">
          <ContactList contacts={contacts} onRemove={removeHandler} />
        </Route>
        <Route path="/new-contact" exact>
          <AddContact onAddContact={addContactHandler} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
