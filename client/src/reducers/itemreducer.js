import uuid from 'react-uuid';
import { GET_STOCKS, ADD_STOCKS, DELETE_STOCK, LOADING } from '../actions/types';

const initialState = {
    stocks: [],
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_STOCKS:
            return {
                ...state,
                stocks: action.payload,
                loading: false
            };
        case DELETE_STOCK:
            return {
                ...state,
                stocks: state.stocks.filter(stock => stock._id !== action.payload)
            };
        case ADD_STOCKS:
            return {
                ...state,
                stocks: [action.payload, ...state.stocks]
            };
        case LOADING:
            return {
                ...state,
                loading: true
            }

        default:
            return state;
    }
}