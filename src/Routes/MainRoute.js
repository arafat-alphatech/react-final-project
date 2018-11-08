import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import Loading from '../Pages/Loading'

const NotMatch = Loadable({
  loader: () => import(/* webpackChunkName: "404"*/ "../Pages/NotMatch"),
  loading: () => <Loading />
});

const SignUp = Loadable({
  loader: () => import(/* webpackChunkName: "terpinjam"*/ "../Pages/SignUp"),
  loading: () => <Loading />
});

const SignIn = Loadable({
  loader: () => import(/* webpackChunkName: "terpinjam"*/ "../Pages/SignIn"),
  loading: () => <Loading />
});

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home"*/ "../Pages/Home"),
  loading: () => <Loading />
});

const Terpinjam = Loadable({
  loader: () => import(/* webpackChunkName: "terpinjam"*/ "../Pages/Dipinjam"),
  loading: () => <Loading />
});

const Dipinjam = Loadable({
  loader: () => import(/* webpackChunkName: "Dipinjam"*/ "../Pages/Dipinjam"),
  loading: () => <Loading />
});

  
const MainRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/terpinjam" component={Terpinjam} />
      <Route exact path="/dipinjam" component={Dipinjam} />
      <Route component={NotMatch} />
    </Switch>
  );
};
export default MainRoute;
