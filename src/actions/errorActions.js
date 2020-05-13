import {
    GET_ERRORS,
    CLEAR_ERRORS
} from './typejs';

// Return errors

export const returnError = (msg, status, id = null) => {
    return {
        type: GET_ERRORS,
        paylod: {
            msg,
            status,
            id
        }
    }
}

//CLEAR ERRORS
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}