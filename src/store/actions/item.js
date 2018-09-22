import * as actions from './actionTypes';
import axios from "axios";

export const item_new_image = () => {
    return {
        type: actions.ITEM_NEW_IMAGE
    };
};

export const item_delete_image = () => {
    return {
        type: actions.ITEM_DELETE_IMAGE
    };
};

export const item_create = () => {
    return {
        type: actions.ITEM_CREATE
    };
};

export const item_creating = () => {
    return {
        type: actions.ITEM_CREATING
    };
};

export const item_created = () => {
    return {
        type: actions.ITEM_CREATED
    };
};

export const get_items = () => {
    console.log("get_items");
    return dispatch => {
        axios.get("http://localhost:3000/api/v1/item/categories/1")
            .then(response=> {
                console.log(response.data);
                if(response.data.success){
                    dispatch(get_items_success(response.data.items));
                }else{
                    dispatch(get_items_fail())
                }
            })
            .catch(err => {
                dispatch(get_items_fail())
            })
        
        
    }
};

const get_items_success = (items) => {
    return {
        type: actions.GET_ITEMS_SUCCESS,
        items: items
    };
};

const get_items_fail = () => {
    return {
        type: actions.GET_ITEMS_FAIL
    };
};