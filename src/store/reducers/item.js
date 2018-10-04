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
    }
    return state
}

export default reducer;