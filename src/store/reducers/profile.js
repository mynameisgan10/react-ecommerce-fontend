import * as actionTypes from "../actions/actionTypes";
import * as utilities from "../utilities";

const initialState = {
    profileItems: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.POPULATE_PROFILE_ITEMS:
            utilities.updateObject(state,{profileItems: action.items})

    }
    return state
}

export default reducer;