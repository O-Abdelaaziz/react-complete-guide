import { useState } from 'react';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Header from './components/Header';

const contactList=[
    {
      id:'1',
      name:'abdelaaziz',
      email:'abdelaaziz@gmail.com',
    }
  ];

function App() {
  const [contacts, setContacts] = useState([]);
  
  const addContactHandler=(contact)=>{
    console.log(contact);
  }

  return (
    <div className="ui container">
      <Header/>
      <AddContact onAddContact={addContactHandler}/>
      <ContactList contacts={contactList}/>
    </div>
  );
}

export default App;
