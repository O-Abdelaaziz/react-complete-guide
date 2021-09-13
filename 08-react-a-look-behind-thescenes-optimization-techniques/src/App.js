import React, {useState, useCallback} from 'react';

import './App.css';
import DemoOutPut from './components/Demo/DemoOutPut';
import Button from './components/UI/Button/Button';

function App() {
  console.log('App is running');
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const toggleParagraphHandler = useCallback(()=>{
    if (allowToggle){
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  },[allowToggle]);

  const AllowToggleHandler = (()=>{
    setAllowToggle(true)
  })

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutPut show={showParagraph}/>
      <Button onClick={AllowToggleHandler} >Allow Toggle !!!</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph !!!</Button>
    </div>
  );
}

export default App;
