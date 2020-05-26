import axios from "axios";

import { createBrowserHistory } from "history";

// const url = `${process.env.REACT_APP_API_URL}`;

const history = createBrowserHistory();
export const login = (data) => {
	return async (dispatch) => {
		try {
			const response = await axios.post(
				`https://api.indrakawasan/user/login`,
				data
			);
			console.log(response.data);
			dispatch({
				type: "LOGIN_SUCCESS",
				payload: response.data,
			});
			history.push("/");
			window.location.reload();
		} catch (error) {
			error && alert(`Either your email or password is wrong.`);
			history.push("/login");
		}
	};
};

export const logout = () => {
	return {
		type: "LOGOUT_SUCCESS",
	};
};
