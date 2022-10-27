import './App.css';
import React from 'react';
import Home from './components/Home';
import Button from './components/Button';

function App() {
  return (
   
    <div className="App">
       <Home/>
       <Button  as="a" href="https://whereisthemouse.com"  text="Twitter Link"/>
       <Button  as="a" href="https://whereisthemouse.com"  text="Zuri Team"/>
       <Button  as="a" href="https://whereisthemouse.com"  text="Zuri Books"/>
       <Button  as="a" href="https://whereisthemouse.com"  text="Python Books"/>
       <Button as="a" href="https://whereisthemouse.com" text="Background Check for Coders"/>
    </div>
  );
}

export default App;
