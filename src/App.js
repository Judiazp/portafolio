import React, {useState, useEffect, Suspense, lazy} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import projectList from './data/projectList';
import Contact from './components/pages/contact'
import './App.css';
import Welcome from "./components/pages/welcomeSection/index";
import Project from './components/pages/project/index'
import Loading from './components/molecules/loader/index'

// const Welcome = lazy(() => import('./components/pages/welcomeSection/index'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener('load', () => {
      setTimeout(() => {
          setLoading(false)
      }, 900);
    })
  })

  return (
    <Router>
      {/* <Suspense fallback={<Loading/>}>
        <Switch> */}
          <Route exact path = '/loader' component = { Loading }/>
          { (loading) ? <Loading/> :  <Route exact path = '/'> <Welcome /> </Route> } 

          { (loading) ? <Loading/> 
            : <Route exact path= '/projects'>
                <Project projectList = { projectList } />
              </Route> }
          
          { (loading) ? <Loading/> 
            : <Route exact path = '/contact'>
                <Contact />
              </Route> }
      {/* <Route exact path = '/loader' component = { Loading }/>
      <Route exact path = '/'> <Welcome /> </Route> 
      <Route exact path= '/projects'>
        <Project projectList = { projectList } />
      </Route> 
    
      <Route exact path = '/contact'>
        <Contact />
      </Route>  */}
        {/* </Switch>
      </Suspense> */}
    </Router>
    
  );
}

export default App;
