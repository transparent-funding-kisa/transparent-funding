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

        <Route path="/funding-apply" exact component={FundingApply}></Route>
        <Route path="/detail/:Id" exact component={Detail}></Route>
        <Route path="/signup" exact component={Signup}></Route>
        <Route path="/signin" exact component={Signin}></Route>
        <Route path="/main" component={MainPage} />

        {/* <Route path="/1" component={Test}></Route> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
