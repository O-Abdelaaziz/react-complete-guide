import React, {useState, useCallback} from 'react';

import './App.css';
import DemoOutPut from './components/Demo/DemoOutPut';
import Button from './components/UI/Button/Button';

function App() {
  console.log('App is running');
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHandler = useCallback(()=>{
     setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  },[]);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutPut show={false}/>
      <Button onClick={toggleParagraphHandler} >Toggle Paragraph !!!</Button>
    </div>
  );
}

export default App;
