import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "@fortawesome/react-fontawesome";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

import Main from "./pages/Home/Main/Main";

import CreateEvent from "./pages/Create_Event/EventCreate";

import Login from "./pages/Form/Login/Login";

import Register from "./pages/Form/Register/Register";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Detail from "./pages/Detail/Detail";

import ShowAll from "./pages/Show_All/ShowAll";
import Profile from "./pages/Profile/Profile";

const store = createStore(reducers, applyMiddleware(thunk));

store.subscribe(() => {
  console.log("data");
  console.log(store.getState());
});

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login}>
            <Login />
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
          <Route exact path="/showall" component={ShowAll}>
            <ShowAll />
          </Route>
          <Route exact path="/event/create" component={CreateEvent}>
            <CreateEvent />
          </Route>
          <Route path="/event/:id" component={Detail}>
            <Detail />
          </Route>
          <Route exact path="/profile" component={Profile}>
            <Profile />
          </Route>
          <Route exact path="/" component={Main}>
            <Main />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
