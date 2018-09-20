import * as actionTypes from "../actions/actionTypes";
// import * as utilities from "../utilities";

const initialState = {
    authenticated: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN_SUCCESS:
            return {authenticated: true}
        case actionTypes.USER_LOGOUT:
            return {authenticated: false}
        case actionTypes.USER_LOGIN_FAIL:
            return {authenticated: false}

    }
    return state
}

export default reducer;