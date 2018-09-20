import * as actions from "./actionTypes";
import axios from "axios";

export const user_login = (user) => {
    return dispatch => {
        axios.post('http://localhost:3000/api/v1/users/auth',user,{withCredentials: true})
            .then(response => {
                dispatch(user_login_success());
            })
            .catch(error => {
                dispatch(user_login_fail())
            })
    }
};

export const user_login_success = () => {
    return {
        type: actions.USER_LOGIN_SUCCESS
    }
}

export const user_login_fail = () => {
    return {
        type: actions.USER_LOGIN_FAIL
    };
};

export const user_logout = () => {
    return {
        type: actions.USER_LOGOUT
    };
};