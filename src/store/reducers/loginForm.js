import * as actionTypes from "../actions/actionTypes";
import * as utilities from "../utilities";

const initialState = {
    username: {
        label: 'username',
        maxLength: 32,
        minLength: 4,
        required: true,
        onTouch: false,
        value: '',
        success: false,
        type: 'text',
        placeHolder: 'Email Input',
        errorMessage: ''
    },
    password: {
        label: 'password',
        maxLength: 32,
        minLength: 10,
        required: true,
        onTouch: false,
        value: '',
        success: false,
        type: 'password',
        placeHolder: 'Please type in a password',
        errorMessage: ''
    },
    confirmPassword: {
        label: 'confirm password',
        maxLength: 32,
        minLength: 10,
        required: true,
        onTouch: false,
        value: '',
        success: false,
        type: 'password',
        placeHolder: 'Confirm Password',
        errorMessage: ''
    },
    formValidity: false,
    signUp: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FORM_INPUT:
            const newValue = {[action.propertyName]: {
                ...state[action.propertyName],
                value: action.value,
                onTouch: true
            }}
            return utilities.updateObject(state, newValue)
        case actionTypes.CHECK_FORM_VALIDITY:
            let valid = true
            const validation = {
                [action.propertyName]: {
                    ...state[action.propertyName],
                    success: valid
                }
            }
            if(state[action.propertyName].value.length === 0){
                valid = false
                validation[action.propertyName].success = valid;
                validation[action.propertyName].errorMessage = "The field cannot be empty"
                return utilities.updateObject(state, validation)
            }
            if(state[action.propertyName].value.length <= state[action.propertyName].minLength){
                valid = false;
                validation[action.propertyName].success = valid;
                validation[action.propertyName].errorMessage = "The field should have atleast " + state[action.propertyName].minLength + " characters";
                return utilities.updateObject(state, validation)
            }

            if(state[action.propertyName].value.length >= state[action.propertyName].maxLength){
                valid = false;
                validation[action.propertyName].success = valid;
                validation[action.propertyName].errorMessage = "The field should have less than " + state[action.propertyName].maxLength + " characters";
                return utilities.updateObject(state, validation)
            }

            validation[action.propertyName].success = valid;
            validation[action.propertyName].errorMessage = '';
            return utilities.updateObject(state, validation)
            
            
    }
    return state;
}

export default reducer;

