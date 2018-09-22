import * as actions from "./actionTypes";
import {toggleModal} from "./modal";
import axios from "axios";

export const user_login = (user) => {
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
                    dispatch(user_login_success());
                }else{
                    dispatch(user_login_fail());
                }

            })
            .catch(error => {
                dispatch(user_login_fail())
            })
        }
};

const user_login_success = () => {
    return {type: actions.USER_LOGIN_SUCCESS}
}

const user_login_fail = () => {
    return {type: actions.USER_LOGIN_FAIL};
};

export const user_logout = () => {
    return {type: actions.USER_LOGOUT};
};

export const user_signup = (user) => {
    return dispatch => {
        axios.post('http://localhost:3000/api/v1/users/signup',user,{withCredentials: true})
            .then(response => {
                if(response.data.success){
                    dispatch(toggleModal());
                    dispatch(user_signup_success())
                }else{
                    console.log(response.data.message);
                    dispatch(user_signup_fail())
                }
            }) 
    }
}

const user_signup_fail = () => {
    return {type: actions.USER_SIGNUP_FAIL}
}

const user_signup_success = () => {
    return {type: actions.USER_SIGNUP_SUCCESS}
}

export const try_auto_login = () => {
    console.log("trying auto login")
    return dispatch => {
        axios.post("http://localhost:3000/api/v1/users/me",{},{withCredentials:true, xsrfCookieName:'xsrf',xsrfHeaderName: 'X-XSRF-TOKEN'})
            .then(response => {
                if(response.data.success){
                    console.log("great");
                    console.log(response.data.message);
                    dispatch(user_login_success())
                }else{
                    console.log("failed");
                    dispatch(user_login_fail());
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
}

const try_auto_login_success = () => {
    return {type: actions.TRY_AUTO_LOGIN_SUCCESS}
}

const try_auto_login_fail = () => {
    return {type: actions.TRY_AUTO_LOGIN_FAIL}
}

