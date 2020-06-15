import axios from "axios";
import { createBrowserHistory } from "history";

// const url = `${process.env.REACT_APP_API_URL}`;

const history = createBrowserHistory();

export const login = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `https://api.indrakawasan.com/user/login`,
        data
      );

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: response.data,
      });
      history.replace("/");
    } catch (error) {
      dispatch({
        type: "MODAL_ERROR_SHOW",
        payload: "Either your email or password is wrong.",
      });
    }
  };
};
