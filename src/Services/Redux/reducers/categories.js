const initialState = {
    data: [],
    isLoading: false,
    error: false,
};

export default account = (state = initialState, action) => {
    switch (action.type) {

        //GET_CATEGORIES
        case 'GET_CATEGORIES_PENDING': {
            return {
                ...state,
                error: true,
                isLoading: true
            }

        }
        case 'GET_CATEGORIES_REJECTED': {
            return {
                ...state,
                error: true,
                isLoading: false
            }

        }
        case 'GET_CATEGORIES_FULFILLED': {
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