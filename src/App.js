import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from "./components/pages/welcomeSection/index";
import Project from './components/pages/project/index';
import Contact from "./components/pages/contact/index"
import PageNotFound from './components/pages/pageNotFound/index';
import Loading from './components/molecules/loader/index';
import projectList from './data/projectList';
import { ThemeProvider } from "@material-ui/core";
import themeConfig from "./themeConfig.js";

import './App.css';
//Import para pruebas
import WindowModal from './components/molecules/modal/index';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 900);
  }, [])

  return (
    <ThemeProvider theme={themeConfig}>
      <Router>
        <Switch>
          <Route exact path = '/pruebas' component = { WindowModal }/>
          { (loading) ? <Loading/> :  <Route exact path = '/'component={ Welcome } /> } 
          { 
            (loading) ? <Loading/> 
            : <Route exact path= '/projects'>
                <Project projectList = { projectList } />
              </Route> 
          }
          { (loading) ? <Loading/> : <Route exact path = '/contact' component={Contact}/> } 
          { (loading) ? <Loading/> : <Route component={PageNotFound}/> }
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
