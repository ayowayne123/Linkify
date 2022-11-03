import './App.css';
import React from 'react';
import Footer from './components/Footer';
import Home from './pages/Home';
import { Route,Routes } from 'react-router-dom';
import Contact from './pages/Contact';


function App() {
  return (
   <>
    <div className="App container">
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer/> 
    </div>
    
    </>
  );
}

export default App;
