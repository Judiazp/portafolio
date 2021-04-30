import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import projectList from './data/projectList';
import Welcome from "./components/pages/welcomeSection/";
import Project from './components/pages/project/index';
import Contact from './components/pages/contact'
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path = '/' component = { Welcome } />
      <Route exact path= '/projects'>
        <Project projectList = { projectList } />
      </Route>
      <Route exact path = '/contact'>
        <Contact />
      </Route>
    </Router>
  );
}

export default App;
