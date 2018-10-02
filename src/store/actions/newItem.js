import * as actions from './actionTypes';
import axios from 'axios';

export const getItemCategories = () => {
    return dispatch => {
        axios
            .get("http://localhost:3000/api/v1/item/categories")
            .then(response => {
                dispatch(populateItemCategories(response.data.results))
            })
            .catch(err => {
                throw err;
            })
        }
}

const populateItemCategories = (categories) => {
    return {type: actions.POPUPLATE_ITEM_CATEGORIES, categories: categories}
}

export const newItemInfoInput = (event) => {
    console.log(event.target.name);
    return {type: actions.NEW_ITEM_INFO_INPUT, value: event.target.value, target: event.target.name}
}

export const storeImageSrc = (src, imageName, fileType, fileName) => {
    return {type: actions.STORE_IMAGE_SRC, src: src, imageName: imageName, fileType: fileType, fileName: fileName}
}

export const storeImageElRef = (refName, ref) => {
    return {type: actions.STORE_IMAGE_EL_REF, refName: refName, ref: ref}
}

export const selectItemCategory = (cat_id) => {
    return {type: actions.SELECT_ITEM_CATEGORY, id: cat_id}
}

export const selectItemCondition = (value) => {
    return {type: actions.SELECT_ITEM_CONDITION, value: value}
}

export const listNewItem = (newItem) => {
    return dispatch => {
        console.log(newItem);
        axios
            .post("http://localhost:3000/api/v1/item/new", newItem, {
                withCredentials: true,
                xsrfCookieName: 'xsrf',
                xsrfHeaderName: 'X-XSRF-TOKEN',
                header: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(response => {
                if (response.data.success) {
                    dispatch(listNewItemSuccess(response.data.item_id));
                } else {
                    dispatch(listNewItemFail());
                }
            })
            .catch(err => {
                throw err;
            })
        }
}

const listNewItemSuccess = (newItemId) => {
    return {type: actions.LIST_NEW_ITEM_SUCCESS, newItemId: newItemId}
}

const listNewItemFail = () => {
    return {type: actions.LIST_NEW_ITEM_FAIL}
}