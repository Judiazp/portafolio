import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import projectList from './links/projectList';
import Welcome from "./components/pages/welcomeSection/";
import Grid from './components/pages/grid/';
import Contact from './components/pages/contactList'
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path = '/' component = { Welcome } />
      <Route exact path= '/grid-project'>
          <Grid projectList = { projectList } />
      </Route>
      <Route exact path = '/contact'>
          <Contact />
      </Route>
    </Router>
  );
}

export default App;
