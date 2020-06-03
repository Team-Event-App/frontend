const initialState = {
  viaLogin: localStorage.getItem("access-token"),
  loading: false,
  errorMessage: "",
  isShow: false,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case "LOGOUT_SUCCESS":
      localStorage.removeItem("access-token");
      return {
        ...state,
        viaLogin: "",
      };

    case "LOGIN_SUCCESS":
      localStorage.setItem("access-token", action.payload);
      return {
        ...state,
        isShow: false,
        viaLogin: action.payload,
      };

    case "LOGIN_FAILED":
      return {
        ...state,
        isShow: true,
        errorMessage: "Either your email or password is wrong.",
      };

    case "HIDE_MODAL":
      return {
        ...state,
        isShow: false,
      };

    default:
      return state;
  }
};

export default login;
