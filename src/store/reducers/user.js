import * as actionTypes from "../actions/actionTypes";
// import * as utilities from "../utilities";

const initialState = {
    authenticated: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN:
            return {authenticated: true}
        case actionTypes.USER_LOGOUT:
            return {authenticated: false}

    }
    return state
}

export default reducer;