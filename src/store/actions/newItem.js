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
    return {type: actions.NEW_ITEM_INFO_INPUT,value: event.target.value, target: event.target.name}
}

export const store_image_src = (src,imageName) => {
    return {
        type: actions.STORE_IMAGE_SRC,
        src: src,
        imageName: imageName
    }
}