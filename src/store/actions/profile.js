import axios from 'axios';
import * as actions from "../actions/actionTypes";

export const getUserProfile = () => {
    return dispatch => {
        axios.get("http://localhost:3000/api/v1/item/user/1",{withCredentials:true, xsrfCookieName:'xsrf',xsrfHeaderName: 'X-XSRF-TOKEN'})
            .then(response => {
                if(response.data.success){
                    dispatch(populateProfileItems(response.data.items))
                }else{
                    console.log("error something");
                }
            })
    }
}

const populateProfileItems = (items) => {
    return {type: actions.POPULATE_PROFILE_ITEMS, items: items}
}

