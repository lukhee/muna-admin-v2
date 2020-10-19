import React from "react";
import { Route, Switch  } from "react-router-dom";
import MainLayout from "../../components/layout/MainLayout";
import Auth from "./Auth";

const MainPage = () => {
  return (
    <MainLayout>
      <Switch>
          <Route component={Auth} />
      </Switch>
    </MainLayout>
  );
};

export default MainPage;
