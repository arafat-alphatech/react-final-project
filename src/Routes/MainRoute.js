import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import Loading from '../Pages/Loading'

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home"*/ "../Pages/Home"),
  loading: () => <Loading />
});

const NotMatch = Loadable({
  loader: () => import(/* webpackChunkName: "404"*/ "../Pages/NotMatch"),
  loading: () => <Loading />
});

const MainRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotMatch} />
    </Switch>
  );
};
export default MainRoute;
