import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "@fortawesome/react-fontawesome";

import Main from "./pages/Home/Main/Main";

import CreateEvent from "./pages/Create_Event/CreateEvent";

import Login from "./pages/Login/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login}>
          <Login />
        </Route>
        <Route exact path="/" component={Main}>
          <Main />
        </Route>
        <Route exact path="/event" component={CreateEvent}>
          <CreateEvent />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
