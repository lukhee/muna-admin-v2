import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import GlobalStyles from "./components/general/GlobalStyle";
import theme from "./components/theme";
import MainLayout from "./container/App/MainLayout";
import DashBaord from "./container/App/DashBaord";

const App = () => {

  return ( 
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Switch>
          <Route path="/auth" render={(props) => <MainLayout {...props} />} />
          <Route path="/admin" render={(props) => <DashBaord {...props} />} />
          <Route path="*">
            {" "}
            <Redirect to="/404" />{" "}
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
