export interface SaledProductState{
    saledProducts: SaledProduct[]
}

export interface SaledProduct{
    id?: number
    idProduct?: number
    idSale?:number
}


export enum SaledProductActions{
    FETCH_SALED_PRODUCTS = '@saledProducts/FETCH_SALED_PRODUCTS',
    FETCH_SALED_PRODUCTS_SUCCESS = '@saledProducts/FETCH_SALED_PRODUCTS_SUCCESS',
    ADD_SALED_PRODUCTS = '@saledProducts/ADD_SALED_PRODUCTS',
    ADD_SALED_PRODUCTS_SUCCESS = '@saledProducts/ADD_SALED_PRODUCTS_SUCCESS'
}