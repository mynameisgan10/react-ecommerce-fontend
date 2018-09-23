import * as actionTypes from "../actions/actionTypes";
import * as utilities from "../utilities";

const initialState = {
    title: "",
    condition: "",
    brand: "",
    price: "",
    description: "",
    meetup: "",
    categories: [],
    firstImage: "",
    secondImage: "",
    thirdImage: "",
    fourthImage: "",
    firstImageRef: "",
    secondImageRef: "",
    thirdImageRef: "",
    fourthImageRef: "",
    currentImage: 0,
    propertyNames: ["firstImage","secondImage","thirdImage","fourthImage"]
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
        case actionTypes.STORE_IMAGE_SRC:
            return utilities.updateObject(state,{[action.imageName]: action.src,currentImage: state.currentImage + 1})
        case actionTypes.STORE_IMAGE_EL_REF:
            return utilities.updateObject(state,{[action.refName+'Ref']: action.ref})

    }
    return state
}

export default reducer;