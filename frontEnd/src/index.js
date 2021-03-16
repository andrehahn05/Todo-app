import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import  Home from './views/Home';
// import  Task from './views/Task';
import Routes from './routes';



ReactDOM.render(
  <React.StrictMode>
    {/* <Home /> */}
    {/* <Task /> */}
    <Routes/>
  </React.StrictMode>,
  document.getElementById('root')
);

