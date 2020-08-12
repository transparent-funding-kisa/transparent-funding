import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './views/Home'
import './App.css';


function App() {
  return (
<Router>
  <div className="App">
  <Route path="/" component={Home} />
  </div>
</Router>
  );
};

export default App;
