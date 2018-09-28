import axios from 'axios';
import * as actions from "../actions/actionTypes";

export const getUserProfile = () => {
    return dispatch => {
        axios
            .get("http://localhost:3000/api/v1/item/user/me", {
                withCredentials: true,
                xsrfCookieName: 'xsrf',
                xsrfHeaderName: 'X-XSRF-TOKEN'
            })
            .then(response => {
                if (response.data.success) {
                    dispatch(populateProfileItems(response.data.items))
                } else {
                    console.log("error something");
                }
            })
    }
}

const populateProfileItems = (items) => {
    return {type: actions.POPULATE_PROFILE_ITEMS, items: items}
}

export const deleteItem = (productid, index) => {
    return dispatch => {
        axios
            .delete("http://localhost:3000/api/v1/item/delete/" + productid, {
                withCredentials: true,
                xsrfCookieName: 'xsrf',
                xsrfHeaderName: 'X-XSRF-TOKEN'
            })
            .then(response => {
                if (response.data.success) {
                    console.log(index);
                    dispatch(deleteItemSuccess(index))
                } else {
                    console.log("in the else block")
                    dispatch(deleteItemFail())
                }
            })
            .catch(err => {
                dispatch(deleteItemFail())
            })
        }
}

const deleteItemSuccess = (index) => {
    return {type: actions.DELETE_ITEM_SUCCESS, index: index}
}

const deleteItemFail = () => {
    return {type: actions.DELETE_ITEM_FAIL}
}
