import connect from './axios';
import {SERVER_API} from "../../Helper/config";

export const getProducts = () => {

    return {
        type: 'GET_PRODUCTS',
        payload: connect(SERVER_API + 'product', 'GET')
    };
};