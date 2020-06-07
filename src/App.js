import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "@fortawesome/react-fontawesome";
import { connect } from "react-redux";

import Main from "./pages/Home/Main/Main";
import CreateEvent from "./pages/Create_Event/EventCreate";

import Login from "./pages/Form/Login/Login";

import Register from "./pages/Form/Register/Register";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Detail from "./pages/Detail/Detail";
import SearchCategory from "./pages/Search/SearchCat";
import ShowAll from "./pages/Show_All/ShowAll";
import Profile from "./pages/Profile/Profile";
import History from "./pages/History/HistoryEvent";

import Modals from "./components/Modals/Modals";

const App = (props) => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">{props.viaLogin ? <Main /> : <Login />}</Route>
          <Route path="/register" component={Register} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/searchtitle" component={ShowAll} />
          <Route path="/searchcategory" component={SearchCategory}/>
          <Route path="/event/create">
            {props.viaLogin ? <CreateEvent /> : <Login />}
          </Route>
          <Route path="/event/:id" component={Detail} />
          <Route path="/profile" component={Profile} />
          <Route path="/history" component={History} />
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
      <Modals />
    </>
  );
};

const mapStateToProps = (state) => {
  return { viaLogin: state.login.viaLogin };
};

export default connect(mapStateToProps)(App);
