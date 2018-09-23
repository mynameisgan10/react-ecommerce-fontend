import * as actionTypes from "../actions/actionTypes";
import * as utilities from "../utilities";

const initialState = {
    itemName: null,
    itemCategory: null,
    itemPrice: null,
    itemDesc: null,
    itemImages: [],
    currentItems: [],
    productPageItem: {},
    categories: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ITEM_NEW_IMAGE:
            // const newImages = state     .itemImages     .split(); newImages.push("new
            // image path or something"); return utilities.updateObject(state, {itemImages:
            // newImages})
            return state;
        case actionTypes.ITEM_DELETE_IMAGE:
            const currentImages = state
                .itemImages
                .split();
            currentImages.splice(action.imageIndex);
            return utilities.updateObject(state, {itemImages: currentImages})
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
                itemDesc: action.item.desc
            }
            const productPageItem = {
                productPageItem: item
            }
            console.log(productPageItem);
            return utilities.updateObject(state, productPageItem)
        case actionTypes.ITEM_SAVE_IMAGE:
            const newImages = state
                .itemImages
                .splice();
            newImages.push(action.image);
            const newObject = {
                itemImages: newImages
            }
            return utilities.updateObject(state, newObject);

    }
    return state
}

export default reducer;