import { action } from 'typesafe-actions'
import { Product } from '../Products/types'
import { SaledProductActions } from './types'


export const fetchSaledProducts = ( idSale:number ) => action(SaledProductActions.FETCH_SALED_PRODUCTS, { idSale })
export const fetchSaledProductsSuccess = ( products: Product ) => action(SaledProductActions.FETCH_SALED_PRODUCTS_SUCCESS, { products })
export const addSaledProduct = (idSale: number, product: Product) => action(SaledProductActions.ADD_SALED_PRODUCTS, { idSale, product })