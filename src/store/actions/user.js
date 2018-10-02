import * as actions from "./actionTypes";
import {toggleModal} from "./modal";
import axios from "axios";

export const userLogin = (user) => {
    return dispatch => {
        axios
            .post(
                'http://localhost:3000/api/v1/users/auth',
                user,
                {withCredentials: true}
            )
            .then(response => {
                if (response.data.success) {
                    dispatch(toggleModal());
                    dispatch(userLoginSuccess());
                    dispatch(populateUserInfo(response.data.user));
                    dispatch(resetForm());
                }else{
                    dispatch(userLoginFail());
                }

            })
            .catch(error => {
                dispatch(userLoginFail())
            })
        }
};

const populateUserInfo = (user) => {
    return {
        type: actions.POPULATE_USER_INFO,
        user: user
    }
}

const userLoginSuccess = () => {
    return {type: actions.USER_LOGIN_SUCCESS}
}

const userLoginFail = () => {
    return {type: actions.USER_LOGIN_FAIL};
};

export const user_logout = () => {
    return {type: actions.USER_LOGOUT};
};

export const userSignup = (user) => {
    return dispatch => {
        axios.post('http://localhost:3000/api/v1/users/signup',user,{withCredentials: true})
            .then(response => {
                if(response.data.success){
                    dispatch(toggleModal());
                    dispatch(userSignupSuccess());
                    dispatch(resetForm());
                }else{
                    console.log(response.data.message);
                    dispatch(userSignupFail())
                }
            }) 
    }
}

const userSignupFail = () => {
    return {type: actions.USER_SIGNUP_FAIL}
}

const userSignupSuccess = () => {
    return {type: actions.USER_SIGNUP_SUCCESS}
}

export const tryAutoLogin = () => {
    console.log("trying auto login")
    return dispatch => {
        axios.post("http://localhost:3000/api/v1/users/me",{},{withCredentials:true, xsrfCookieName:'xsrf',xsrfHeaderName: 'X-XSRF-TOKEN'})
            .then(response => {
                if(response.data.success){
                    dispatch(userLoginSuccess());
                    dispatch(populateUserInfo(response.data.user));
                    dispatch(resetForm());
                }else{
                    dispatch(userLoginFail());
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const tryLogout = () => {
    return dispatch => {
        axios.post("http://localhost:3000/api/v1/users/logout",{},{withCredentials:true, xsrfCookieName:'xsrf',xsrfHeaderName: 'X-XSRF-TOKEN'})
            .then(response => {
                if(response.data.success){
                    console.log(response.data.message);
                    dispatch(logout());
                }else{
                    dispatch(logoutFail());
                }
            })
            .catch(err => {
                dispatch(logoutFail());
            })
    }
}

const logout = () => {
    return {type: actions.LOGOUT}
}
const logoutFail = () => {
    return {type: actions.LOGOUT_FAIL}
}

const resetForm = () => {
    return {
        type: actions.RESET_FORM
    }
}



