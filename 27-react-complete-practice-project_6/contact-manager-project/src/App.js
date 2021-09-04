import { useState } from 'react';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Header from './components/Header';

// const contactList = [
//   {
//     id: '1',
//     name: 'abdelaaziz',
//     email: 'abdelaaziz@gmail.com',
//   }
// ];

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts(prevContacts =>{
      return [...prevContacts,contact];
    })
}

return (
  <div className="ui container">
    <Header />
    <AddContact onAddContact={addContactHandler} />
    <ContactList contacts={contacts} />
  </div>
);
}

export default App;
