import * as actionTypes from "../actions/actionTypes";
import * as utilities from "../utilities";

const initialState = {
    currentItems: [],
    productPageItem: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ITEMS_SUCCESS:
            return {
                ...state,
                currentItems: [...action.items]
            }
        case actionTypes.GET_SINGLE_ITEM_SUCCESS:
            const item = {
                itemName: action.item.name,
                itemCategory: action.item.category_id,
                itemPrice: action.item.price,
                itemDesc: action.item.desc,
                itemImages: [
                    {imageSrc: action.item.first_image},
                    {imageSrc: action.item.second_image},
                    {imageSrc: action.item.third_image},
                    {imageSrc: action.item.fourth_image},
                ]
            }
            const productPageItem = {
                productPageItem: item
            }
            return utilities.updateObject(state, productPageItem)
            case actionTypes.LIKE_ITEM_SUCCESS:
                const newLikedCurrentItems = [...state.currentItems];
                newLikedCurrentItems[action.itemIndex].liked = true;
                return utilities.updateObject(state,{currentItems: newLikedCurrentItems});
            case actionTypes.LIKE_ITEM_FAIL:
                const newUnlikedCurrentItems = [...state.currentItems];
                newUnlikedCurrentItems[action.itemIndex].liked = false;
                return utilities.updateObject(state,{currentItems: newUnlikedCurrentItems});
            case actionTypes.SAVE_ITEM_SUCCESS:
                const newSavedCurrentItems = [...state.currentItems];
                newSavedCurrentItems[action.itemIndex].bookmarked = true;
                return utilities.updateObject(state,{currentItems: newSavedCurrentItems});
            case actionTypes.SAVE_ITEM_FAIL:
                const newUnsavedCurrentItems = [...state.currentItems];
                newUnlikedCurrentItems[action.itemIndex].bookmarked = false;
                return utilities.updateObject(state,{currentItems: newUnsavedCurrentItems})
    }
    return state
}

export default reducer;