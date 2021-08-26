import { Product } from "../Products/types";

export interface CartState{
    productsInCart: Product[]
}

export enum CartActions {
    ADD_ITEM = '@cart/ADD_ITEM',
    REMOVE_ITEM = '@cart/REMOVE_ITEM',
    ADD_ITEM_SAGAS = '@cart/ADD_ITEM_SAGAS',
    REMOVE_ITEM_SAGAS = '@cart/REMOVE_ITEM_SAGAS'
}