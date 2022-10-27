import './App.css';
import React from 'react';
import Profile from './components/Profile';
import Button from './components/Button';

function App() {
  return (
   
    <div className="App">
       <Profile/>
       <Button btn_Id="btn__zuri"  as="a" href="https://training.zuri.team" text="Zuri Team"/>
       <Button  btn_Id="books" as="a" href="https://books.zuri.team"  text="Zuri Books"/>
       <Button  btn_Id="book__python" as="a" href="https://whereisthemouse.com"  text="Python Books"/>
       <Button btn_Id="pitch" as="a" href="https://background.zuri.team" text="Background Check for Coders"/>
       <Button btn_Id="book__design" as="a" href="https://books.zuri.team/design-rules" text="Design Books"/>
    </div>
  );
}

export default App;
