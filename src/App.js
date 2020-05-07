import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbars from "./pages/Navbar/Navbar";
import Event from "./pages//Home/Event/Event";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbars />
      <Switch>
        <Route exact path="/" component={Event}>
          <Event />
        </Route>

        {/* <Route exact path="/category" component={Category}>
          <Category />
        </Route> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
