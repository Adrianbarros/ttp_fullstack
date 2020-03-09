import { combineReducers } from 'redux';
import itemreducer from './itemreducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';


export default combineReducers({
    stock: itemreducer,
    error: errorReducer,
    auth: authReducer
})