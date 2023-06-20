import React from 'react'; // Importez votre composant Toolbar ici
import './App.css'; // Importez votre fichier CSS global ici
import Navbar from './Navbar/navbar';
import {Routes, Route } from 'react-router-dom';
import Home from './Navbar/home';
import About from './Navbar/about';
import Contact from './Navbar/contact';
import Deconnexion from './Navbar/deconnexion';


function App() {
  return (
    <div className="App">
       
         
    <Navbar />
      <Routes>
        <Route exact path="./" component={<Home/>} />
        <Route path="./about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/deconnexion" component={Deconnexion} />
      </Routes>
    
    
    </div>
  );
}

export default App;
