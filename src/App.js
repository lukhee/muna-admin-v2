import React from "react";
import { Provider } from "react-redux";
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
import store from './Redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Switch>
            <Route path="/auth" render={(props) => <MainLayout {...props} />} />
            <Route path="/admin" render={(props) => <DashBaord {...props} />} />
            <Route path="*">
              <Redirect to="/404" />
            </Route>
          </Switch>
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default App;
