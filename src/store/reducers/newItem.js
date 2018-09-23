import * as actionTypes from "../actions/actionTypes";
import * as utilities from "../utilities";

const initialState = {
    title: "",
    condition: "",
    brand: "",
    price: "",
    description: "",
    meetup: "",
    categories: []
}

const reducer = (state=initialState,action) => {
    switch ( action.type) {
        case actionTypes.POPUPLATE_ITEM_CATEGORIES:
        const newCategoriesObject = {
            categories: action.categories
        }
        return utilities.updateObject(state, newCategoriesObject);
    }
    return state
}

export default reducer;