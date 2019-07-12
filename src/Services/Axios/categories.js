import connect from './axios';
import {SERVER_API} from "../../Helper/config";

export const getCategories = () => {

    return {
        type: 'GET_CATEGORIES',
        payload: connect(SERVER_API + 'categories', 'GET')
    };
};