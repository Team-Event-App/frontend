import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "@fortawesome/react-fontawesome";

import Navbars from "./pages/Navbar/Navbar";
import Main from "./pages/Home/Main/Main";
import Footer from "./pages/Footer/Footer";

<<<<<<< HEAD
=======
import CreateEvent from "./pages/Create_Event/CreateEvent";
import Book from "./pages/Book/Book";

// import Login from "./components/Login/Login";
>>>>>>> f0f266dc70dcce465f72fdf12ffa1b9885541ec9

function App() {
  return (
    <Router>
      <Navbars />
      <Switch>
        <Route exact path="/" component={Main}>
          <Main />
        </Route>
        <Route exact path="/event" component={CreateEvent}>
          <CreateEvent />
        </Route>
        <Route exact path="/book" component={Book}>
          <Book />
        </Route>
        {/* <Route exact path="/login" component={Login}>
          <Login />
        </Route> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
