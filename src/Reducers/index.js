import { ADD_TO_FAVOURITES, RECEIVE_LIST, REQUEST_LIST } from '../Actions/index';
import { combineReducers } from 'redux'


let initialState = {
    list: [],
    favourites: [],
    isLoading: true
}

const frappListings = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_FAVOURITES:
            if(state.favourites.findIndex(item => item.title === action.listingTitle) >= 0) {
                return {
                    ...state
                };
            }
            return {
                ...state,
                favourites: [
                    ...state.favourites,
                    state.list.find(item => item.title === action.listingTitle)
                ],
            }
        case REQUEST_LIST:
            return {
                ...state,
                isLoading: true
            }
        case RECEIVE_LIST: 
            return {
                ...state,
                list: action.list,
                isLoading: false
            }
        default: 
            return state;
    }
} 

const rootReducer = combineReducers({
    frappListings
})

export default rootReducer;