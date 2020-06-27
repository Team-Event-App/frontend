import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "@fortawesome/react-fontawesome";
import { connect } from "react-redux";

import Main from "./pages/Home/Main/Main";
import CreateEvent from "./pages/Create_Event/EventCreate";

import Login from "./Auth/Login/Login";
import Register from "./Auth/Register/Register";

import About from "./pages/About/About";
import allEvent from "./pages/All_Events/ShowAll";
import Contact from "./pages/Contact/Contact";
import Detail from "./pages/Detail/Detail";
import SearchCategory from "./pages/SearchCat/SearchCat";
import ShowAll from "./pages/Search_Title/Search_Title";
import Profile from "./pages/Profile/Profile";
import History from "./pages/History/HistoryEvent";

import Modals from "./components/Modals/index";

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
          <Route path="/allevents" component={allEvent} />
          <Route path="/searchcategory" component={SearchCategory} />
          <Route path="/event/create">
            {props.viaLogin ? <CreateEvent /> : <Login />}
          </Route>
          <Route path="/event/:id">
            {props.viaLogin ? <Detail /> : <Login />}
          </Route>
          <Route path="/profile" component={Profile} />
          <Route path="/history" component={History} />
          <Route exact path="/" component={Main} />

          {/* Admin Page */}

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
