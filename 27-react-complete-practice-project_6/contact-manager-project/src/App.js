import { useState } from 'react';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Header from './components/Header';

function App() {
  const [contacts, setContacts] = useState([]);
  const contactList=[
    {
      id:'1',
      name:'abdelaaziz',
      email:'abdelaaziz@gmail.com',
    }
  ];
  return (
    <div className="ui container">
      <Header/>
      <AddContact/>
      <ContactList contacts={contactList}/>
    </div>
  );
}

export default App;
