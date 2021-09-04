import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header/>
      <AddContact/>
      <ContactList/>
    </div>
  );
}

export default App;
