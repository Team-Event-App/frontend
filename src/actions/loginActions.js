import axios from "axios";

import { createBrowserHistory } from "history";

const history = createBrowserHistory();
export const login = (data) => {
	return async (dispatch) => {
		try {
			const response = await axios.post(
				`http://api.evenity.asia/user/login`,
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
