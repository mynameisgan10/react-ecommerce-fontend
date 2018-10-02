import * as actions from './actionTypes';
import axios from "axios";

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

export const likeItem = (itemid) => {
    return dispatch => {
        axios
            .post("http://localhost:3000/api/v1/item/like/" + itemid, {}, {
                withCredentials: true,
                xsrfCookieName: 'xsrf',
                xsrfHeaderName: 'X-XSRF-TOKEN'
            })
            .then(response => {
                if (response.data.success) {
                    dispatch(likeItemSuccess());
                } else {
                    dispatch(likeItemFail());
                }
            })
    }
}

const likeItemSuccess = () => {
    return {type: actions.LIKE_ITEM_SUCCESS}
}

const likeItemFail = () => {
    return {type: actions.LIKE_ITEM_FAIL}
}

export const saveItem = (itemid) => {
    return dispatch => {
        axios
            .post("http://localhost:3000/api/v1/item/save/" + itemid, {}, {
                withCredentials: true,
                xsrfCookieName: 'xsrf',
                xsrfHeaderName: 'X-XSRF-TOKEN'
            })
            .then(response => {
                if (response.data.success) {
                    dispatch(saveItemSuccess())
                } else {
                    dispatch(saveItemFail())
                }
            })
    }
}

const saveItemSuccess = () => {
    return {type: actions.SAVE_ITEM_SUCCESS}
}

const saveItemFail = () => {
    return {type: actions.SAVE_ITEM_FAIL}
}
