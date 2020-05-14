import React from "react";
import { Redirect , BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "@fortawesome/react-fontawesome";

import Main from "./pages/Home/Main/Main";

import CreateEvent from "./pages/Create_Event/CreateEvent";

import Login from "./pages/Form/Login/Login";

import Register from "./pages/Form/Register/Register";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";


import {Provider, connect} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'
import ShowAll from "./pages/Show_All/ShowAll";

const store = createStore(reducers,applyMiddleware(thunk));

store.subscribe(() => {
  console.log('data')
  console.log(store.getState());
})

function App(props){
    return(
      <Provider store={store}>
      <Router>
      <Switch>
        <Route exact path="/login" component={Login}>
          <Login />
        </Route>
        <Route exact path="/" component={Main}>
          <Main />
        </Route>
        <Route exact path="/event" component={CreateEvent}>
          {(props.viaLogin) ? <Redirect push to="/login" /> : <CreateEvent />}
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
      </Switch>
    </Router>
    </Provider>
    )
}
// const mapStateToProps = (state) => {
//   return{
//     viaLogin:state.login.viaLogin
//   }
// }

export default App;
