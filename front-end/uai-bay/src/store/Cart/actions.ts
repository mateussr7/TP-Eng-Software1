import { action } from 'typesafe-actions'
import { Product } from '../Products/types'
import { CartActions } from './types'

export const addItem = (product: Product) => action(CartActions.ADD_ITEM, { product })
export const removeItem = (idProduct: number) => action(CartActions.REMOVE_ITEM, { idProduct })
export const addItemSagas = (product: Product) => action(CartActions.ADD_ITEM_SAGAS, { product })
export const removeItemSagas = (idProduct: number) => action(CartActions.REMOVE_ITEM_SAGAS, { idProduct })