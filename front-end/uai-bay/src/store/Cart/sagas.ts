import { AnyAction } from 'redux'
import { put, takeLatest } from 'redux-saga/effects'
import { Product } from '../Products/types'
import { addItem, removeItem } from './actions'
import { CartActions } from './types'


export function* cartSagas(){
    yield takeLatest(CartActions.ADD_ITEM_SAGAS, additemBySagas)
    yield takeLatest(CartActions.REMOVE_ITEM_SAGAS, removeItemBySagas)
}

function* additemBySagas(action: AnyAction){
    const product: Product = action.payload.product
    yield put(addItem(product))    
}

function* removeItemBySagas(action: AnyAction){
    const idProduct: number = action.payload.idProduct
    yield put(removeItem(idProduct))
}