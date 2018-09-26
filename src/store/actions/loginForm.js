import * as actions from "./actionTypes";

export const formInput = (propertyName, value) => {
    return dispatch => {
        dispatch(populateFormInput(propertyName,value));
        dispatch(checkValidity(propertyName));
    }
}

const populateFormInput = (propertyName,value) => {
    return {type: actions.FORM_INPUT, value: value, propertyName: propertyName}
}


const checkValidity = (propertyName) => {
    return {
        type: actions.CHECK_FORM_VALIDITY, propertyName: propertyName
    }
}