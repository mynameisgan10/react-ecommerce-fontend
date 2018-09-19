import * as actionTypes from "../actions/actionTypes";
import * as utilities from "../utilities";

const initialState = {
    showModal: false,
    signUp: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_MODAL:
            return utilities.updateObject(state,{showModal:true})
        case actionTypes.HIDE_MODAL:
            return utilities.updateObject(state,{showModal: false})
        case actionTypes.TOGGLE_MODAL:
            return utilities.updateObject(state,{showModal: !state.showModal})
        case actionTypes.TOGGLE_SIGNUP:
            return utilities.updateObject(state,{signUp: !state.signUp})
    }
    return state
}

export default reducer;