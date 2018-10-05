import * as actions from './actionTypes';
import axios from "axios";

export const getItems = (authenticated) => {
    console.log(authenticated);
    return dispatch => {
        if (authenticated) {
            axios
                .get("http://localhost:3000/api/v1/item/categories/1", {
                    withCredentials: true,
                    xsrfCookieName: 'xsrf',
                    xsrfHeaderName: 'X-XSRF-TOKEN'
                })
                .then(response => {
                    if (response.data.success) {
                        return dispatch(getItemsSuccess(response.data.items))
                    }
                    dispatch(getItemsFail())
                })
                .catch(err => {
                    dispatch(getItemsFail())
                })
            } else {
            console.log("else block");
            axios
                .get("http://localhost:3000/api/v1/item/categories/1")
                .then(response => {
                    console.log(response.data);
                    if (response.data.success) {
                        return dispatch(getItemsSuccess(response.data.items));
                    }
                    dispatch(getItemsFail())

                })
                .catch(err => {
                    dispatch(getItemsFail())
                })

            }
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
                    return dispatch(getSingleItemSuccess(response.data.item[0]))
                }
                dispatch(getSingleItemFail())

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

export const likeItem = (itemid, index) => {
    console.log(index);
    return dispatch => {
        axios
            .post("http://localhost:3000/api/v1/item/like/" + itemid, {}, {
                withCredentials: true,
                xsrfCookieName: 'xsrf',
                xsrfHeaderName: 'X-XSRF-TOKEN'
            })
            .then(response => {
                if (response.data.success) {
                    dispatch(likeItemSuccess(index));
                } else {
                    dispatch(likeItemFail(index));
                }
            })
    }
}

const likeItemSuccess = (index) => {
    return {type: actions.LIKE_ITEM_SUCCESS, itemIndex: index}
}

const likeItemFail = () => {
    return {type: actions.LIKE_ITEM_FAIL, itemIndex: index}
}

export const saveItem = (itemid, index) => {
    console.log(index);
    return dispatch => {
        axios
            .post("http://localhost:3000/api/v1/item/save/" + itemid, {}, {
                withCredentials: true,
                xsrfCookieName: 'xsrf',
                xsrfHeaderName: 'X-XSRF-TOKEN'
            })
            .then(response => {
                if (response.data.success) {
                    dispatch(saveItemSuccess(index))
                } else {
                    dispatch(saveItemFail(index))
                }
            })
    }
}

const saveItemSuccess = (index) => {
    return {type: actions.SAVE_ITEM_SUCCESS, itemIndex: index}
}

const saveItemFail = () => {
    return {type: actions.SAVE_ITEM_FAIL, itemIndex: index}
}
