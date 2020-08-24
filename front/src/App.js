import React from 'react';
import Signup from './views/SignUp';
import Signin from './views/SignIn';
import Detail from './views/DetailPage/Detail';
import MainPage from './views/MainPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FundingApply from './views/FundingApply/FundingApply';

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/FundingApply/:Id" exact component={FundingApply}></Route>
        <Route path="/Detail/:Id" exact component={Detail}></Route>
        <Route path="/Signup" exact component={Signup}></Route>
        <Route path="/Signin" exact component={Signin}></Route>
        <Route path="/" exact component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
