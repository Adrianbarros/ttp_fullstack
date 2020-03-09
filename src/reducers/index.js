import { combineReducers } from 'redux';
import itemreducer from './itemreducer';


export default combineReducers({
    stock: itemreducer
})