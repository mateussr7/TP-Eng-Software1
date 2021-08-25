import { combineReducers } from 'redux'
import userReducer from './User'
import productReducer from './Products'
import employeeReducer from './Employee'
import { saleReducer } from './Sales'


const rootReducer = combineReducers({
    userReducer,
    productReducer,
    employeeReducer,
    saleReducer
})


export default rootReducer