import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'
import rootReducer from './rootReducer'
import { UserState } from './User/types'
import { ProductState } from './Products/types'
import { EmployeeState } from './Employee/types'
import { SalesState } from './Sales/types'

export interface ApplicationState {
    userReducer: UserState,
    productReducer: ProductState,
    employeeReducer: EmployeeState,
    saleReducer: SalesState
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store