import {createStore , combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import category from './category.js';

let reducers = combineReducers({ category});

const store = () =>{
    return createStore(reducers , composeWithDevTools());

}

export default store();