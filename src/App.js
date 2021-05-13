//React Components
import React, {useState, useEffect} from 'react';
import Welcome from "./components/pages/welcomeSection/index";
import Project from './components/pages/project/index';
import Contact from "./components/pages/contact/index"
import Loading from './components/molecules/loader/index';
import PageNotFound from './components/pages/pageNotFound/index';
//Import para pruebas
import WindowModal from './components/molecules/modal/index';
//Material-UI
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from "@material-ui/core";
import themeConfig from "./themeConfig.js";
//Resources
import projectList from './data/projectList';
import './App.css';

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
          { (loading) ? <Loading/> :
            <Route exact path= '/projects'>
              <Project projectList = { projectList } />
            </Route> }
          { (loading) ? <Loading/> : <Route exact path = '/contact' component={Contact}/> } 
          { (loading) ? <Loading/> : <Route component={PageNotFound}/> }
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
