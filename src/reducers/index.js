import { combineReducers } from "redux";

import login from "./loginReducers";
import modal from "./modalReducers";

export default combineReducers({
  login,
  modal,
});
