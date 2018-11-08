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

const BukuDipinjam = Loadable({
  loader: () => import(/* webpackChunkName: "terpinjam"*/ "../Pages/BukuDipinjam"),
  loading: () => <Loading />
});

const BukuTerpinjam = Loadable({
  loader: () => import(/* webpackChunkName: "Dipinjam"*/ "../Pages/BukuTerpinjam"),
  loading: () => <Loading />
});

const BukuSaya = Loadable({
  loader: () => import(/* webpackChunkName: "Dipinjam"*/ "../Pages/BukuSaya"),
  loading: () => <Loading />
});
const Tambah = Loadable({
  loader: () => import(/* webpackChunkName: "Tambah"*/ "../Pages/Tambah"),
  loading: () => <Loading />
});


const PublicDetailBuku = Loadable({
  loader: () => import(/* webpackChunkName: "Dipinjam"*/ "../Components/CardBooksDetail"),
  loading: () => <Loading />
});

const Permintaansaya = Loadable({
  loader: () => import(/* webpackChunkName: "permintaansaya"*/ "../Pages/Permintaansaya"),
  loading: () => <Loading />
});

const Permintaanpinjam = Loadable({
  loader: () => import(/* webpackChunkName: "permintaansaya"*/ "../Pages/Permintaanpinjam"),
  loading: () => <Loading />
});
  
const EditBook = Loadable({
  loader: () => import(/* webpackChunkName: "permintaansaya"*/ "../Pages/EditBook"),
  loading: () => <Loading />
});

const MainRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/buku-terpinjam" component={BukuTerpinjam} />
      <Route exact path="/buku-dipinjam" component={BukuDipinjam} />
      <Route exact path="/bukusaya" component={BukuSaya} />
      <Route exact path="/tambah" component={Tambah} />
      <Route path="/permintaansaya" component={Permintaansaya} />
      <Route path="/permintaanpinjam" component={Permintaanpinjam} />
      <Route path="/book/:id" component={PublicDetailBuku} />
      <Route path="/edit/:id" component={EditBook} />
      <Route component={NotMatch} />
    </Switch>
  );
};
export default MainRoute;
