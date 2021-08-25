import { call, put, takeLatest } from "@redux-saga/core/effects"
import { AnyAction } from "redux"
import { addSaleService, deleteSaleService, fetchSalesFromCustomerService, updateSaleService } from "../../services/saleService"
import { addSaleSuccess, deleteSaleSuccess, fetchSalesFRomCustomerSuccess, updateSaleSuccess } from "./actions"
import { Sale, SalesActions } from "./types"


export function* saleSagas(){
    yield takeLatest(SalesActions.FETCH_SALES_FROM_CUSTOMER, fetchSaleFromCustomerSagas)
    yield takeLatest(SalesActions.ADD_SALE, addSaleSagas)
    yield takeLatest(SalesActions.DELETE_SALE, deleteSaleSagas)
    yield takeLatest(SalesActions.UPDATE_SALE, updateSaleSagas)
}

export function* fetchSaleFromCustomerSagas(action: AnyAction){
    try{
        const idCustomer: number = action.payload.idCustomer
        const sales: Sale[] = yield call(() => fetchSalesFromCustomerService(idCustomer))
        yield put(fetchSalesFRomCustomerSuccess(sales))
    }catch(err){}
}

export function* addSaleSagas(action: AnyAction){
    try{
        const sale: Sale = action.payload.sale
        const returnedSale: Sale = yield call(() => addSaleService(sale))
        yield put(addSaleSuccess(returnedSale))
    }catch(err){}
}

export function* deleteSaleSagas(action: AnyAction){
    try{
        const idSale: number = action.payload.idSale
        const sale: Sale = yield call(() => deleteSaleService(idSale))
        yield put(deleteSaleSuccess(sale.id as number))
    }catch(err){}
}

export function* updateSaleSagas(action: AnyAction){
    try{
        const sale: Sale =  action.payload.sale
        const returnedSale: Sale = yield call(() => updateSaleService(sale))
        yield put(updateSaleSuccess(returnedSale)) 
    }catch(err){}
}