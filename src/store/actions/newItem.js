import * as actions from './actionTypes';
import axios from 'axios';

export const get_item_categories = () => {
    return dispatch => {
        axios
            .get("http://localhost:3000/api/v1/item/categories")
            .then(response => {
                dispatch(populate_item_categories(response.data.results))
            })
            .catch(err => {
                throw err;
            })
        }
}

const populate_item_categories = (categories) => {
    return {type: actions.POPUPLATE_ITEM_CATEGORIES, categories: categories}
}

export const new_item_info_input = (event) => {
    console.log(event.target.name);
    return {type: actions.NEW_ITEM_INFO_INPUT, value: event.target.value, target: event.target.name}
}

export const store_image_src = (src, imageName) => {
    return {type: actions.STORE_IMAGE_SRC, src: src, imageName: imageName}
}

export const store_image_el_ref = (refName, ref) => {
    return {type: actions.STORE_IMAGE_EL_REF, refName: refName, ref: ref}
}

export const select_item_category = (cat_id) => {
    return {type: actions.SELECT_ITEM_CATEGORY,id:cat_id}
}

export const select_item_condition = (value) => {
    return {type: actions.SELECT_ITEM_CONDITION,value: value}
}

export const list_new_item = () => {
    return {
        type: actions.LIST_NEW_ITEM
    }
}

const list_new_item_success = () => {
    return {
        type: actions.LIST_NEW_ITEM_SUCCESS
    }
}

const list_new_item_fail = () => {
    return{
        type: actions.LIST_NEW_ITEM_FAIL
    }
}