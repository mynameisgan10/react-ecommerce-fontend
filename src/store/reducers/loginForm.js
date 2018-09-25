import * as actionTypes from "../actions/actionTypes";
import * as utilities from "../utilities";

const initialState = {
    username: '',
    password: '',
    confirmPassword: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FORM_INPUT:
            return utilities.updateObject(state,{[action.propertyName]: action.value})
    }
    return state;
}

export default reducer;

