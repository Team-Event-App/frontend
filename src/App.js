import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "@fortawesome/react-fontawesome";

import Navbars from "./pages/Navbar/Navbar";
import Main from "./pages/Home/Main/Main";
import Footer from "./pages/Footer/Footer";

//  import Events from "./pages/Event/Event";
import Book from "./pages/Book/Book";

function App() {
  return (
    <Router>
      <Navbars />
      <Switch>
        <Route exact path="/" component={Main}>
          <Main />
        </Route>
        {/* <Route exact path="/event" component={Events}>
          <Events />
        </Route> */}
        <Route exact path="/book" component={Book}>
          <Book />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
