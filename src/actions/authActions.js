import axios from 'axios';
import {
    returnError
} from "./errorActions";

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
} from "../actions/typejs";

//Check token & load user
export const loadUser = () => (dispatch, getState) => {
    // User Loading
    dispatch({
        type: USER_LOADING
    });

    axios.get('https://api.indrakawasan.com/user/show', tokenConfig(getState))
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnError(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
}

// Setup config/headers and token
export const tokenConfig = getState => {
        // Get Token from localStorage
        const token = getState().auth.token;

        // Set Headers
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        // If token added to headers
        if (token) {
            config.headers['access-token'] = token;
        }

        return config;
}