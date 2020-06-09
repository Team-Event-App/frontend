export const showSuccess = (message) => {
  return {
    type: "MODAL_SUCCESS_SHOW",
    payload: message,
  };
};

export const showError = (message) => {
  return {
    type: "MODAL_ERROR_SHOW",
    payload: message
  }
}

export const closeModalError = () => {
  return {
    type: "MODAL_ERROR_HIDE",
  };
};

export const closeModalSuccess = () => {
  return {
    type: "MODAL_SUCCESS_HIDE",
  };
};