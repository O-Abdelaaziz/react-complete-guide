import { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { uuid } from 'uuidv4';
import './App.css';
import AddContact from './components/AddContact';
import ContactDetail from './components/ContactDetail';
import ContactList from './components/ContactList';
import Header from './components/Header';
import instanceApi from './api/contacts';
import EditContact from './components/EditContact';



const LOCAL_STORAGE_KEY = "contacts"
function App(props) {
  const [contacts, setContacts] = useState([]);

  const retrieveContacts =  async () => {
    const response = await  instanceApi.get("/contacts");
    return response.data;
  };

  const addContactHandler = async(contact) => {
    const request={ id: uuid(), ...contact };
    const response=await instanceApi.post('/contacts',request);
    setContacts(prevContacts => {
      return [...prevContacts, response.data];
    });
  };

  const updateContactHandler = async(contact)=>{
    const response=await instanceApi.put(`/contacts/${contact.id}`,contact)
    const { id, name, email } = response.data;
    setContacts(
      contacts.map(contact=>{
        return contact.id===id ?{...response.data} : contact;
      })
    );
  }
  const removeHandler =async (id) => {
    await instanceApi.delete(`/contacts/${id}`);
     const newContact = contacts.filter(contact => contact.id !== id);
      setContacts(newContact);
  }

  useEffect(() => {
    const getAllContacts = async () => {
      const getContacts = await retrieveContacts();
      if (getContacts) {
        setContacts(getContacts);
      }
    }
    getAllContacts();
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
        <Route path="/edit/:id">
          <EditContact onUpdateContact={updateContactHandler} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
