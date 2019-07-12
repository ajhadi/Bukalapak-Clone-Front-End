const initialState = {
    data: [],
    isLoading: false,
    token:'',
    error:false,
    isLogin: false,
};

export default account = (state = initialState, action) => {
    switch (action.type) {

        //LOGIN
        case 'POST_LOGIN_PENDING': {
            return {
                ...state,
                error:true,
                isLoading: true
            }

        }
        case 'POST_LOGIN_REJECTED': {
            return {
                ...state,
                error:true,
                isLoading: false
            }

        }
        case 'POST_LOGIN_FULFILLED': {
            return {
                ...state,
                error:false,
                data:action.payload.data,
                token:action.payload.headers["x-auth-token"],
                isLogin: true,
                isLoading: false
            }

        }

        //GET_ACCOUNT
        case 'GET_ACCOUNT_PENDING': {
            return {
                ...state,
                error: true,
                isLoading: true
            }

        }
        case 'GET_ACCOUNT_REJECTED': {
            return {
                ...state,
                error: true,
                isLoading: false
            }

        }
        case 'GET_ACCOUNT_FULFILLED': {
            return {
                ...state,
                error: false,
                data: action.payload.data.value.data,
                isLogin: true,
                isLoading: false
            }

        }
        default:
            return state;
    }
}