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