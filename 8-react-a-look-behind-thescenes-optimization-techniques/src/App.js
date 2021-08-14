import React, {useState} from 'react';

import './App.css';
import Button from './components/UI/Button/Button';

function App() {

  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHandler = ()=>{
     setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={toggleParagraphHandler} >Toggle Paragraph !!!</Button>
      {showParagraph && <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>}
    </div>
  );
}

export default App;
