import axios from "axios";

// const url = `${process.env.REACT_APP_API_URL}`;

export const login = (data, match) => {
  console.log(match);
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
