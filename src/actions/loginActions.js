import axios from "axios";
import { createBrowserHistory } from "history";

// const url = `${process.env.REACT_APP_API_URL}`;

const history = createBrowserHistory();

export const login = (data, match) => {
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
      history.push("/");
      window.location.reload();
    } catch (error) {
      dispatch({
        type: "LOGIN_FAILED",
        payload: true,
      });
    }
  };
};

export const closeModal = () => {
  return {
    type: "HIDE_MODAL",
  };
};

export const logout = () => {
  return {
    type: "LOGOUT_SUCCESS",
  };
};
