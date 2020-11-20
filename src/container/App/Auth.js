import React from "react";
import {connect} from 'react-redux'
import { PropTypes } from "prop-types";
import { Switch } from "react-router-dom";
import {PublicRuote} from "../../Routes"
import Login from "../../components/views/auth/Login";
import Register from "../../components/views/auth/Register";
import NotFound from "../../components/views/error/NotFoundView";

const Auth = ({auth: {isAuthenticated}}) => {
  const loginRoute = ["/auth", "/auth/login"];
  return (
    <Switch>
      <PublicRuote exact path={loginRoute} component={Login} isAuthenticated={isAuthenticated} />
      <PublicRuote path="/auth/register" component={Register} isAuthenticated={isAuthenticated} />
      <PublicRuote path="*" component={NotFound} />
    </Switch>
  );
};


Auth.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps) (Auth);
