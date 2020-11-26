import React from "react";
import {connect} from 'react-redux'
import { PropTypes } from "prop-types";
import { Switch, Redirect } from "react-router-dom";
import {PrivateRoute} from "../../Routes"
import DashBoard from "../../components/layout/DashBoardLayout";
import DashboardView from "../../components/views/dashboard";
import Proverbs from "../../components/views/proverbs";
import PreviewProverb from "../../components/views/proverbs/preveiwProverb";
import TestComponent from "../../components/views/testCompoenent";
import NotFound from "../../components/views/error/NotFoundView";
import Alert from "../../components/Widgets/Alert";

const Application = ({auth: {isAuthenticated}}) => {
  // const dashboardRoute = ['/admin', '/'];
  return(
    <DashBoard>
      <Alert/>
      <Switch>
        <PrivateRoute exact path='/' component={DashboardView} isAuthenticated={isAuthenticated} />
        <PrivateRoute exact path="/admin/proverbs" component={Proverbs} isAuthenticated={isAuthenticated}  />
        <PrivateRoute exact path="/admin/proverbs/:id" component={PreviewProverb} isAuthenticated={isAuthenticated}  />
        <PrivateRoute path="/admin/test_component" component={TestComponent} isAuthenticated={isAuthenticated}  />
        <PrivateRoute path="*" component={NotFound} />
      </Switch>
    </DashBoard>
  )
};

Application.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps) (Application);
