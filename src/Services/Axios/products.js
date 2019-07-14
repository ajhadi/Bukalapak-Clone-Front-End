import connect from './axios';
import {SERVER_API} from "../../Helper/config";

export const getProducts = (search = '') => {
    let link = `product?search=${search}`;
    return {
        type: 'GET_PRODUCTS',
        payload: connect(SERVER_API + link, 'GET')
    };
};

export const addProducts = (data, token) => {
    let header = {
        'Content-Type': 'application/json',
        'x-auth-token': token
    };

    return {
        type: 'ADD_PRODUCTS',
        payload: connect(SERVER_API + 'product', 'POST',data,header)
    };
};

export const getProductById = (id = '') => {
    let link = `product/${search}`;
    return {
        type: 'GET_PRODUCTS',
        payload: connect(SERVER_API + link, 'GET')
    };
};