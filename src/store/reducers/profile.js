import * as actionTypes from "../actions/actionTypes";
import * as utilities from "../utilities";

const initialState = {
    profileItems: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.POPULATE_PROFILE_ITEMS:
            return utilities.updateObject(state, {profileItems: action.items})
        case actionTypes.DELETE_ITEM_SUCCESS:
            const newProfileItems = profileItems.splice();
            newProfileItems.splice(action.index);
            return utilities.updateObject(state,{profileItems: newProfileItems})

        case actionTypes.DELETE_ITEM_FAIL:
            return state

    }
    return state
}

export default reducer;