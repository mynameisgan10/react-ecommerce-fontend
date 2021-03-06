import * as actionTypes from "../actions/actionTypes";
import * as utilities from "../utilities";

const initialState = {
    title: "",
    condition: "New",
    brand: "",
    price: "",
    selectedCategory: null,
    description: "",
    meetup: "",
    categories: [],
    firstImage: {
        src: "",
        type: "",
        name: ""
    },
    secondImage: {
        src: "",
        type: "",
        name: ""
    },
    thirdImage: {
        src: "",
        type: "",
        name: ""
    },
    fourthImage: {
        src: "",
        type: "",
        name: ""
    },
    firstImageRef: "",
    secondImageRef: "",
    thirdImageRef: "",
    fourthImageRef: "",
    currentImage: 0,
    propertyNames: [
        "firstImage", "secondImage", "thirdImage", "fourthImage"
    ],
    newItemId: "",
    redirect: false
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
            return utilities.updateObject(state, {
                [action.imageName]: {
                    src: action.src,
                    type: action.fileType,
                    name: action.fileName
                },
                currentImage: state.currentImage + 1
            })
        case actionTypes.STORE_IMAGE_EL_REF:
            return utilities.updateObject(state, {
                [action.refName + 'Ref']: action.ref
            })
        case actionTypes.SELECT_ITEM_CATEGORY:
            return utilities.updateObject(state, {selectedCategory: action.id})
        case actionTypes.SELECT_ITEM_CONDITION:
            return utilities.updateObject(state, {condition: action.value})
        case actionTypes.LIST_NEW_ITEM_SUCCESS:
            return utilities.updateObject(state, {
                redirect: true,
                newItemId: action.newItemId
            })
        case actionTypes.RESET_NEW_ITEM_FORM:
            return {
                title: "",
                condition: "New",
                brand: "",
                price: "",
                selectedCategory: null,
                description: "",
                meetup: "",
                categories: [],
                firstImage: {
                    src: "",
                    type: "",
                    name: ""
                },
                secondImage: {
                    src: "",
                    type: "",
                    name: ""
                },
                thirdImage: {
                    src: "",
                    type: "",
                    name: ""
                },
                fourthImage: {
                    src: "",
                    type: "",
                    name: ""
                },
                firstImageRef: "",
                secondImageRef: "",
                thirdImageRef: "",
                fourthImageRef: "",
                currentImage: 0,
                propertyNames: [
                    "firstImage", "secondImage", "thirdImage", "fourthImage"
                ],
                newItemId: "",
                redirect: false
            }

    }
    return state
}

export default reducer;