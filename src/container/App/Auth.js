import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../../components/views/auth/Login";
import Register from "../../components/views/auth/Register";
import NotFound from "../../components/views/error/NotFoundView";

const Auth = () => {
  const loginRoute = ["/auth", "/auth/login"];
  return (
    <Switch>
      <Route exact path={loginRoute} component={Login} />
      <Route path="/auth/register" component={Register} />
      {/* <Route path={loginRoute}> <Redirect to='/auth/login'/></Route> */}
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Auth;
