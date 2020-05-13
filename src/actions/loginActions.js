import axios from 'axios';

// const url = 'https://api.indrakawasan.com'

export const login = (data) => {
    return async(dispatch) => {
        try {
            const response = await axios.post('https://api.indrakawasan.com/user/login', data)
            console.log(response.data)
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: response.data
            })
        }
        catch(error){
            error && alert(`Login Failed.`)
        }

    }

    
}

export const logout = () =>{
    return {
        type: 'LOGOUT_SUCCESS'
    }
}
