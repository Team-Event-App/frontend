const initialState = {
  viaLogin: localStorage.getItem("access-token"),
  error: { isShow: false, message: "" },
  success: { isShow: false, message: "" },
  logout: { isShow: false, message: "" },
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case "MODAL_ERROR_SHOW":
      return {
        ...state,
        error: {
          isShow: true,
          message: action.payload,
        },
      };

    case "MODAL_ERROR_HIDE":
      return {
        ...state,
        error: {
          isShow: false,
          message: "",
        },
      };

    case "MODAL_SUCCESS_SHOW":
      return {
        ...state,
        success: {
          isShow: true,
          message: action.payload,
        },
      };

    case "MODAL_SUCCESS_HIDE":
      return {
        ...state,
        success: {
          isShow: false,
          message: "",
        },
      };

    case "MODAL_LOGOUT_SHOW":
      localStorage.removeItem("access-token");
      return {
        ...state,
        logout: {
          isShow: true,
          viaLogin: "",
          message: "",
        }
      }

    case "MODAL_LOGOUT_HIDE":
      return {
        ...state,
        logout: {
          isShow: false,
          message: "",
        },
      };


    default:
      return state;
  }
};

export default modal;
