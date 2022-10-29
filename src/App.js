import './App.css';
import React from 'react';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Link from './components/Links/Link';

function App() {
  return (
   
    <div className="App container">
      <div> <Profile/> </div> 
      <div> <Link/>  </div>
       <div> <Footer/> </div>
    </div>
  );
}

export default App;
