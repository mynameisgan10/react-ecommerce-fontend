import * as actions from "./actionTypes";

export const user_login = () => {
    return {
        type: actions.USER_LOGIN
    };
};

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