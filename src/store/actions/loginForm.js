import * as actions from "./actionTypes";

export const formInput = (propertyName, value) => {
    return {type: actions.FORM_INPUT, value: value, propertyName: propertyName}
}