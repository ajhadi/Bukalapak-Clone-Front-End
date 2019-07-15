import connect from './axios';
import {SERVER_API} from "../../Helper/config";

export const getWishlist = (token) => {
    let header = {
        'Content-Type': 'application/json',
        'x-auth-token': token
    };

    return {
        type: 'GET_WISHLIST',
        payload: connect(SERVER_API + 'wishlist', 'GET', '', header)
    };
};


export const addWishList = (id, token) => {
    let data = {
        productId:id
    };

    let header = {
        'Content-Type': 'application/json',
        'x-auth-token': token
    };


    return {
        type: 'ADD_WISHLIST',
        payload: connect(SERVER_API + 'wishlist', 'POST', data, header)
    }
};


export const deleteWishList = (id, token) => {
    let header = {
        'Content-Type': 'application/json',
        'x-auth-token': token
    };

    return {
        type: 'DELETE_WISHLIST',
        payload: connect(SERVER_API + 'wishlist/'+id, 'DELETE','', header)
    }
};