import { Reducer } from 'redux'
import { SaledProduct, SaledProductActions, SaledProductState } from './types'


const INITIAL_STATE: SaledProductState = {
    saledProducts: []
}


export const saledProductReducer: Reducer<SaledProductState> = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SaledProductActions.FETCH_SALED_PRODUCTS_SUCCESS: {
            const products: SaledProduct[] = action.payload.saledProducts
            return {
                ...state,
                saledProducts: products
            }
        }
        case SaledProductActions.ADD_SALED_PRODUCTS_SUCCESS: {
            const product: SaledProduct = action.payload.product
            return{
                ...state,
                saledProducts: [...state.saledProducts, product]
            }
        }
        default: return state
    }
}