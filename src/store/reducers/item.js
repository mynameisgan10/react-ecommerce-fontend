import * as actionTypes from "../actions/actionTypes";
import * as utilities from "../utilities";

const intialState = {
    itemName: null,
    itemCategory: null,
    itemPrice: null,
    itemDesc: null,
    itemImages: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ITEM_NEW_IMAGE:
            const newImages = state
                .itemImages
                .split();
            newImages.push("new image path or something");
            return utilities.updateObject(state, {itemImages: newImages})
        case actionTypes.ITEM_DELETE_IMAGE:
            const currentImages = state
                .itemImages
                .split();
            currentImages.splice(action.imageIndex);
            return utilities.updateObject(state, {itemImages: currentImages})
    }
}

export default reducer;