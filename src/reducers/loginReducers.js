const initialState = {
	viaLogin: localStorage.getItem("access-token"),
	loading: false,
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
				viaLogin: action.payload,
			};
		default:
			return state;
	}
};

export default login;
