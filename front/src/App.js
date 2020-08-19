// import "react-perfect-scrollbar/dist/css/styles.css";
import React from "react";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import Signup from './views/SignUp';
import Signin from './views/SignIn';
import Mypage from './views/MyPage';


// import GlobalStyles from "src/components/GlobalStyles";
// import "src/mixins/chartjs";
// import theme from "src/theme";
// import routes from "src/routes";

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Test from "./views/Test";
import FundingApply from "./views/FundingApply";

const App = () => {
  // const routing = useRoutes(routes);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/FundingApply/:Id" exact component={FundingApply}></Route>
        <Route path="/Signup" exact component={Signup}></Route>
        <Route path="/Signin" exact component={Signin}></Route>
        <Route path="/MyPage" exact component={Mypage}></Route>

        
        
        

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
