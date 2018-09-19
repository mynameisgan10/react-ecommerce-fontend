import * as actions from './actionTypes';

const item_new_image = () => {
    return {
        type: actions.ITEM_NEW_IMAGE
    };
};

const item_delete_image = () => {
    return {
        type: actions.ITEM_DELETE_IMAGE
    };
};

const item_create = () => {
    return {
        type: actions.ITEM_CREATE
    };
};

const item_creating = () => {
    return {
        type: actions.ITEM_CREATING
    };
};

const item_created = () => {
    return {
        type: actions.ITEM_CREATED
    };
};