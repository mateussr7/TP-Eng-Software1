import { Reducer } from 'redux'
import { Product } from '../Products/types'
import { CartActions, CartState } from './types'

const INITIAL_STATE: CartState = {
    productsInCart: []
} 

export const cartReducer: Reducer<CartState> = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartActions.ADD_ITEM: {
            const product: Product = action.payload.product
            if(state.productsInCart.includes(product)){
                const amount = product.amount as number
                const products = state.productsInCart.filter((el)=> el !== product)
                return {
                    ...state,
                    productsInCart: [...products, {...product, amount: amount + 1}]
                }
            }else return{
                ...state,
                productsInCart: [...state.productsInCart, product]
            }
        }
        case CartActions.REMOVE_ITEM: {
            const id: Product = action.payload.idProduct
            const newProducts: Product[] = state.productsInCart.filter((el) => el.id !== id)
            return {
                ...state,
                productsInCart: newProducts
            }
        }
        default: return state
    }
}