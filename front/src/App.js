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
<<<<<<< HEAD
        <Route path="/FundingApply/:Id" exact component={FundingApply}></Route>
        <Route path="/Detail/:Id" exact component={Detail}></Route>
        <Route path="/Signup" exact component={Signup}></Route>
        <Route path="/Signin" exact component={Signin}></Route>
        <Route path="/" exact component={MainPage} />
=======
        <Route path="/funding-apply" exact component={FundingApply}></Route>
        <Route path="/detail/:Id" exact component={Detail}></Route>
        <Route path="/signup" exact component={Signup}></Route>
        <Route path="/signin" exact component={Signin}></Route>
        <Route path="/home" exact component={Home} />
        <Route path="/main" component={MainPage} />

        {/* <Route path="/1" component={Test}></Route> */}
>>>>>>> 637064e98bfe3075d37ccf67d3f823c2c03c8759
      </Switch>
    </BrowserRouter>
  );
};

export default App;
