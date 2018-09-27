import axios from 'axios';

export const getUserProfile = () => {
    return dispatch => {
        axios.get("http://localhost:3000/api/v1/users/profile",{withCredentials:true, xsrfCookieName:'xsrf',xsrfHeaderName: 'X-XSRF-TOKEN'})
            .then(response => {
                if(response.data.success){
                    dispatch(populateProfileItems(response.data.items))
                }else{

                }
            })
    }
}

const populateProfileItems = (items) => {
    return {type: actions.POPULATE_PROFILE_ITEMS, items: items}
}

