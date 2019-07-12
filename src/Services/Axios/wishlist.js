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
    let header = {
        'Content-Type': 'application/json',
        'x-auth-token': token
    };


    return {
        type: 'GET_VERIFIKASI_TOKEN',
        payload: connect(SERVER_API + 'users', 'PATCH', data, header)
    }
};
