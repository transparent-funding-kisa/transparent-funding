// import "react-perfect-scrollbar/dist/css/styles.css";
import React from 'react';
import Signup from './views/SignUp';
import Signin from './views/SignIn';
import Detail from './views/DetailPage/Detail';
import Home from './views/Home'
import MainPage from './views/MainPage'
import Mypage from './views/Mypage';
import Invest from './views/Invest';





// import GlobalStyles from "src/components/GlobalStyles";
// import "src/mixins/chartjs";
// import theme from "src/theme";
// import routes from "src/routes";

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Test from './views/Test';
import FundingApply from './views/FundingApply/FundingApply';

const App = () => {
  // const routing = useRoutes(routes);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/FundingApply/:Id" exact component={FundingApply}></Route>
        <Route path="/Detail/:Id" exact component={Detail}></Route>
        <Route path="/Signup" exact component={Signup}></Route>
        <Route path="/Signin" exact component={Signin}></Route>
        <Route path="/Home" exact component={Home} />
        <Route path="/Main" component={MainPage} />
        <Route path="/Mypage" exact component={Mypage}></Route>
        <Route path="/invest" exact component={Invest}></Route>
        
       

        {/* <Route path="/1" component={Test}></Route> */}
      </Switch>
    </BrowserRouter>

    // <ThemeProvider theme={theme}>
    //   <GlobalStyles />
    //   {routing}
    // </ThemeProvider>
  );
};

export default App;
