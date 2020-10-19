import React from "react";
import { Route, Switch } from "react-router-dom";
import DashBoard from "../../components/layout/DashBoardLayout";
import DashboardView from "../../components/views/dashboard";
import Proverbs from "../../components/views/proverbs";
import TestComponent from "../../components/views/testCompoenent";
import NotFound from "../../components/views/error/NotFoundView";

const Application = () => {
  const dashboardRoute = ['/admin', '/admin/dashboard']
  return(
    <DashBoard>
      <Switch>
        <Route exact path={dashboardRoute} component={DashboardView} />
        <Route path="/admin/proverbs" component={Proverbs} />
        <Route path="/admin/test_component" component={TestComponent} />
        <Route path="*" component={NotFound} />
      </Switch>
    </DashBoard>
  )
};
export default Application;
