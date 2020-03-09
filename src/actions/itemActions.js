import axios from 'axios';
import { GET_STOCKS, ADD_STOCKS, DELETE_STOCK, LOADING } from './types';

export const getStocks = () => dispatch => {
    dispatch(setLoading());
    axios
        .get('/api/stocks')
        .then(res =>
            dispatch({
                type: GET_STOCKS,
                payload: res.data
            })
        )
};

export const deleteStock = (id) => dispatch => {
    axios
        .delete(`/api/stocks/${id}`)
        .then(res => dispatch({
            type: DELETE_STOCK,
            payload: id
        })
        )
};

export const addStocks = (stock) => dispatch => {
    axios
        .post('/api/stocks', stock)
        .then(res =>
            dispatch({
                type: ADD_STOCKS,
                payload: res.data
            })
        )
};

export const setLoading = () => {
    return {
        type: LOADING
    }
}