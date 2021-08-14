import React, {useState} from 'react';

import './App.css';
import DemoOutPut from './components/Demo/DemoOutPut';
import Button from './components/UI/Button/Button';

function App() {

  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHandler = ()=>{
     setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutPut show={showParagraph}/>
      <Button onClick={toggleParagraphHandler} >Toggle Paragraph !!!</Button>
    </div>
  );
}

export default App;
