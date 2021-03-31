import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/molecules/header/header'
import Welcome from './components/organisms/welcome-section/welcome'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
    <Welcome />
  </React.StrictMode>,
  document.getElementById('root')
);

