import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './views/Home'
import MainPage from './views/MainPage'

function App() {
  return (
<BrowserRouter>
      <Switch>  
  <Route path="/Home" exact component={Home} />
  <Route path="/" component={MainPage} />
      </Switch>
  </BrowserRouter>
  );
};

export default App;
