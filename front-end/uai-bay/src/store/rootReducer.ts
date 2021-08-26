import { combineReducers } from 'redux'
import userReducer from './User'
import productReducer from './Products'
import employeeReducer from './Employee'
import { saleReducer } from './Sales'
import { cartReducer } from './Cart'


const rootReducer = combineReducers({
    userReducer,
    productReducer,
    employeeReducer,
    saleReducer,
    cartReducer
})


export default rootReducer