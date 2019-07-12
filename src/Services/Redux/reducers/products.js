const initialState = {
    data: [],
    isLoading: false,
    error: false,
};

export default products = (state = initialState, action) => {
    switch (action.type) {

        //GET_PRODUCTS
        case 'GET_PRODUCTS_PENDING': {
            return {
                ...state,
                error: true,
                isLoading: true
            }

        }
        case 'GET_PRODUCTS_REJECTED': {
            return {
                ...state,
                error: true,
                isLoading: false
            }

        }
        case 'GET_PRODUCTS_FULFILLED': {
            return {
                ...state,
                error: false,
                data: action.payload.data.value.data,
                isLoading: false
            }

        }
        default:
            return state;
    }
}