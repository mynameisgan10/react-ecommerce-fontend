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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.POPUPLATE_ITEM_CATEGORIES:
            const newCategoriesObject = {
                categories: action.categories
            }
            return utilities.updateObject(state, newCategoriesObject);
        case actionTypes.NEW_ITEM_INFO_INPUT:
            const newValueObject = {
                [action.target]: action.value
            }
            return utilities.updateObject(state, newValueObject)

    }
    return state
}

export default reducer;