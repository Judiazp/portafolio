//React Components
import React, {useState, useEffect} from 'react';
import Welcome from "./components/pages/welcomeSection/index";
import Project from './components/pages/project/index';
import Contact from "./components/pages/contact/index"
import Loading from './components/molecules/loader/index';
import PageNotFound from './components/pages/pageNotFound/index';
//Material-UI
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from "@material-ui/core";
import themeConfig from "./themeConfig.js";
//Resources
import projectList from './resources/data/projectList';
import './App.css';
//Formspree
import { FormspreeProvider } from '@formspree/react';

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
          { (loading) ? <Loading/> :  <Route exact path = '/'component={ Welcome } /> } 
          { (loading) ? <Loading/> :
            <Route exact path= '/portfolio'>
              <Project projectList = { projectList } />
            </Route> }
          { 
            (loading) ? <Loading/> : 
            <Route exact path = '/contact' >
              <FormspreeProvider project='1692684993890876581'>
                <Contact/>
              </FormspreeProvider>
            </Route> } 
          { (loading) ? <Loading/> : <Route component={PageNotFound}/> }
        </Switch>
      </Router>
      </ThemeProvider>
  );
}

export default App;
