import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DashBoard from "../../components/layout/DashBoardLayout";
import DashboardView from "../../components/views/dashboard";
import Proverbs from "../../components/views/proverbs";
import PreviewProverb from "../../components/views/proverbs/preveiwProverb";
import TestComponent from "../../components/views/testCompoenent";
import NotFound from "../../components/views/error/NotFoundView";
import Alert from "../../components/Widgets/Alert";

const Application = () => {
  const dashboardRoute = ['/admin', '/'];

  let redirectToUrl;
  const token = localStorage.getItem('token');
  if ((token == undefined) || (token == null)){
    redirectToUrl = <Redirect to="/auth/login"/>;
  }


  return(
    <DashBoard>
      {redirectToUrl}
      <Alert/>
      <Switch>
        <Route exact path={dashboardRoute} component={DashboardView} />
        <Route exact path="/admin/proverbs" component={Proverbs} />
        <Route exact path="/admin/proverbs/:id" component={PreviewProverb} />
        <Route path="/admin/test_component" component={TestComponent} />
        <Route path="*" component={NotFound} />
      </Switch>
    </DashBoard>
  )
};
export default Application;
