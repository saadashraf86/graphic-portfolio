import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './Projects.js'; 
import Contact from './Contact.js'; 
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navigation">
          {/* <div className="navigation-sub">
            <Link to="/" className="item">Projects</Link>
            <Link to="/contact" className="item">Contact</Link>
          </div>
  */}
        </div>
      </div>

      <Route exact path="/" component={Projects} />
        <Route path="/about" component={Contact} />

    </BrowserRouter>
  );
}

export default App;