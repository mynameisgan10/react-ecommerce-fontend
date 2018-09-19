import * as actions from "./actionTypes";

export const showModal = () => {
    return {
        type: actions.SHOW_MODAL
    };
};


export const hideModal = () => {
    return {
        type: actions.HIDE_MODAL
    };
};

export const toggleModal = () => {
    return {
        type: actions.TOGGLE_MODAL
    };
};

export const toggleSignup = () => {
    return {
        type: actions.TOGGLE_SIGNUP
    };
};