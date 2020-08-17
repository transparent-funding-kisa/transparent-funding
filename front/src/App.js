// import "react-perfect-scrollbar/dist/css/styles.css";
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
// import GlobalStyles from "src/components/GlobalStyles";
// import "src/mixins/chartjs";
// import theme from "src/theme";
// import routes from "src/routes";

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Test from './views/Test';
import FundingApply from './views/FundingApply';
import Detail from './views/Detail';

const App = () => {
  // const routing = useRoutes(routes);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/FundingApply/:Id" exact component={FundingApply}></Route>
        <Route path="/Detail/:Id" exact component={Detail}></Route>
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
