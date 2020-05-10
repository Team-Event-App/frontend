import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "@fortawesome/react-fontawesome";

import Main from "./pages/Home/Main/Main";

import CreateEvent from "./pages/Create_Event/CreateEvent";

import Login from "./pages/Form/Login/Login";

import Register from "./pages/Form/Register/Register";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

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
        <Route exact path="/register" component={Register}>
          <Register />
        </Route>
        <Route exact path="/about" component={About}>
          <About />
        </Route>
        <Route exact path="/contact" component={Contact}>
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
