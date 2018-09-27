import * as actionTypes from "../actions/actionTypes";
import * as utilities from "../utilities";

const initialState = {
    authenticated: false,
    currentUser: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN_SUCCESS:
            return utilities.updateObject(state,{authenticated: true})
        case actionTypes.USER_LOGOUT:
            return utilities.updateObject(state,{authenticated: false})
        case actionTypes.USER_LOGIN_FAIL:
            return utilities.updateObject(state,{authenticated: false})
        case actionTypes.USER_SIGNUP_SUCCESS: 
            return utilities.updateObject(state,{authenticated: true})
        case actionTypes.USER_SIGNUP_FAIL:
            return utilities.updateObject(state,{authenticated: false})
        case actionTypes.POPULATE_USER_INFO:
            return utilities.updateObject(state,{currentUser: action.user})
        case actionTypes.LOGOUT:
            return utilities.updateObject(state,{authenticated: false})
        case actionTypes.LOGOUT_FAIL:
            return state
    }
    return state
}

export default reducer;