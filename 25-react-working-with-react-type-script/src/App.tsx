import React from 'react';
import './App.css';
import Todos from './components/Todos';

function App() {
  return (
    <div>
      <Todos items={['Learn react','Learn typescript', 'Learn react with typescript']}/>
    </div>
  );
}

export default App;
