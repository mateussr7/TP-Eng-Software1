export interface ProductState{
    products: Product[]
    productInView: Product | null
}

export interface Product {
    id?: number
    name?: string
    description?: string
    brand?: string
    amount?: number
    exclude?: boolean
    productType?: string
    price?: number
    idSale?: number
}

export interface ProductDTO {
    name: string
    description: string
    brand: string
    amount: number
    exclude: boolean
    productType: string
}

export enum ProductActions{
    FETCH_PRODUCTS = '@product/FETCH_PRODUCTS',
    FETCH_PRODUCTS_SUCCESS = '@product/FETCH_PRODUCTS_SUCCESS',
    ADD_PRODUCT = '@product/ADD_PRODUCT',
    ADD_PRODUCT_SUCCESS = '@product/ADD_PRODUCT_SUCCESS',
    DELETE_PRODUCT = '@product/DELETE_PRODUCT',
    DELETE_PRODUCT_SUCCESS = '@product/DELETE_PRODUCT_SUCCESS',
    UPDATE_PRODUCT = '@product/UPDATE_PRODUCT',
    UPDATE_PRODUCT_SUCCESS = '@product/UPDATE_PRODUCT_SUCCESS'
}

export enum ProductType{
    SMARTPHONES = '@types/SMARTPHONE',
    FURNITURE = '@types/FURNITURE',
    HOME_APPLIANCE = '@types/HOME_APPLIANCE',
    ELETRONICS = '@types/ELETRONICS'
}