import { Reducer } from 'redux'
import { SalesState, Sale, SalesActions } from './types'

const INITIAL_STATE: SalesState = {
    sales: [],
    saleInView: null
}

export const saleReducer: Reducer<SalesState> = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SalesActions.FETCH_SALES_FROM_CUSTOMER_SUCCESS: {
            const sales: Sale[] = action.payload.sales
            return {
                ...state,
                sales: sales
            }
        }
        case SalesActions.ADD_SALE_SUCCESS: {
            const sale: Sale = action.payload.sale
            return{
                ...state,
                sales: [...state.sales, sale]
            }
        }
        case SalesActions.DELETE_SALE_SUCCESS: {
            const id: number = action.payload.idSale
            const newSales = state.sales.filter((el) => el.id !== id)
            return{
                ...state,
                sales: newSales
            }
        }
        case SalesActions.UPDATE_SALE_SUCCESS: {
            const sale: Sale = action.payload.sale
            const filteredSales = state.sales.filter((el) => el.id !== sale.id)
            const atualSales = filteredSales.concat(sale)
            return{
                ...state,
                sales: atualSales
            }
        }
        default: return state 
    }
}