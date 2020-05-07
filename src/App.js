import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Navbars from "./pages/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login}>
          <Login />
        </Route>
        <Route exact path="/" component={Navbars}>
          <Navbars />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
