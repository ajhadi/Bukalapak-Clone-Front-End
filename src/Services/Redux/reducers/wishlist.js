const initialState = {
    data: [],
    isLoading: false,
    error: false,
};

export default wishlist = (state = initialState, action) => {
    switch (action.type) {

        //GET_WISHLIST
        case 'GET_WISHLIST_PENDING': {
            return {
                ...state,
                error: true,
                isLoading: true
            }

        }
        case 'GET_WISHLIST_REJECTED': {
            return {
                ...state,
                error: true,
                isLoading: false
            }

        }
        case 'GET_WISHLIST_FULFILLED': {
            return {
                ...state,
                error: false,
                data: action.payload.data.value,
                isLoading: false
            }

        }

        //DELETE_WISHLIST
        case 'DELETE_WISHLIST_PENDING': {
            return {
                ...state,
                error: true,
                isLoading: true
            }

        }
        case 'DELETE_WISHLIST_REJECTED': {
            return {
                ...state,
                error: true,
                isLoading: false
            }

        }
        case 'DELETE_WISHLIST_FULFILLED': {
            let datanew  = [];
            state.data.map(function (data) {
                if (data._id != action.payload.data.value.id){
                    datanew.push(data);
                }
            });

            return {
                ...state,
                error: false,
                data: datanew,
                isLoading: false
            }

        }

        //ADD_WISHLIST
        case 'ADD_WISHLIST_PENDING': {
            return {
                ...state,
                error: true,
                isLoading: true
            }

        }
        case 'ADD_WISHLIST_REJECTED': {
            return {
                ...state,
                error: true,
                isLoading: false
            }

        }
        case 'ADD_WISHLIST_FULFILLED': {
            return {
                ...state,
                error: false,
                //data: action.payload.data.value,
                isLoading: false
            }

        }
        default:
            return state;
    }
}