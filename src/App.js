import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import Projects from './Projects.js'; 
import Contact from './Contact.js'; 
import './App.css';

function App() {
  return (
      <div className="App">
        {Projects}
      </div>
  );
}

export default App;