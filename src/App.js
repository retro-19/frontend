import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/navbar';
import LandingPage from './components/landingPage';
import StickyNotePage from './components/stickyNotePage';


function App() {
  return (
    <Router>
    <div className="container">
    <Navbar/>
    <br/>
      <Route path="/" exact component={LandingPage} />
      <Route path="/upload" component={StickyNotePage} />
      </div>
  </Router>
  );
}

export default App;
