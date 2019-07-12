import connect from './axios';
import {SERVER_API} from "../../Helper/config";

export const postLogin = (username, password) => {
    let data = {
        username : username,
        password: password,
    };

    return{
        type:'POST_LOGIN',
        payload:connect(SERVER_API+'login','POST',data)
    };
};
export const postRegister = (data) => {
    return {
        type: 'POST_REGISTER',
        payload: connect(SERVER_API + 'register', 'POST', data)
    };
};

export const getAccount = (token) => {
    let header = {
        'Content-Type': 'application/json',
        'x-auth-token': token
    };


    return {
        type: 'GET_ACCOUNT',
        payload: connect(SERVER_API + 'users', 'GET', '', header)
    };
};

export const updateAccount = (token, data) => {
    let header = {
        'Content-Type': 'application/json',
        'x-auth-token': token
    }

    return {
        type: 'UPDATE_ACCOUNT',
        payload: connect(SERVER_API + 'users', 'PATCH', data, header)
    }
}