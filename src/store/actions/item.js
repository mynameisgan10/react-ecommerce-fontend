import * as actions from './actionTypes';
import axios from "axios";

export const item_new_image = () => {
    return {type: actions.ITEM_NEW_IMAGE};
};

export const item_delete_image = () => {
    return {type: actions.ITEM_DELETE_IMAGE};
};

export const item_create = () => {
    return {type: actions.ITEM_CREATE};
};

export const item_creating = () => {
    return {type: actions.ITEM_CREATING};
};

export const item_created = () => {
    return {type: actions.ITEM_CREATED};
};

export const getItems = () => {
    console.log("get_items");
    return dispatch => {
        axios
            .get("http://localhost:3000/api/v1/item/categories/1")
            .then(response => {
                console.log(response.data);
                if (response.data.success) {
                    dispatch(getItemsSuccess(response.data.items));
                } else {
                    dispatch(getItemsFail())
                }
            })
            .catch(err => {
                dispatch(getItemsFail())
            })

        }
};

const getItemsSuccess = (items) => {
    return {type: actions.GET_ITEMS_SUCCESS, items: items};
};

const getItemsFail = () => {
    return {type: actions.GET_ITEMS_FAIL};
};

export const getSingleItem = (itemid) => {
    return dispatch => {
        axios
            .get("http://localhost:3000/api/v1/item/" + itemid)
            .then(response => {
                if (response.data.success) {
                    console.log("got single item");
                    dispatch(getSingleItemSuccess(response.data.item[0]))
                } else {
                    dispatch(getSingleItemFail())
                }
            })
            .catch(err => {
                dispatch(getSingleItemFail())
            })
        }
};

const getSingleItemSuccess = (item) => {
    return {type: actions.GET_SINGLE_ITEM_SUCCESS, item: item}
}
const getSingleItemFail = () => {
    return {type: actions.GET_SINGLE_ITEM_FAIL}
}

// export const get_item_categories = () => {     return dispatch => {
// axios.get("http://localhost:3000/api/v1/item/categories")
// .then(response =>{
// dispatch(populate_item_categories(response.data.results))             })
// .catch(err => {                 throw err;             })     } } const
// populate_item_categories = (categories) => {     return {         type:
// actions.POPUPLATE_ITEM_CATEGORIES,         categories: categories     } }
