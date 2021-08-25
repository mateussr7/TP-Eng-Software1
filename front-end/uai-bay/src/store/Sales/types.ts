import { Product } from "../Products/types";
import { User } from "../User/types";

export interface SalesState{
    sales: Sale[]
    saleInView: Sale | null
}

export interface Sale{
    id?: number
    customer?: User
    products?: Product[]
}

export enum SalesActions{
    FETCH_SALES_FROM_CUSTOMER = '@sale/FETCH_SALES_FROM_CUSTOMER',
    FETCH_SALES_FROM_CUSTOMER_SUCCESS = '@sale/FETCH_SALES_FROM_CUSTOMER_SUCCESS',
    ADD_SALE = '@sale/ADD_SALE',
    ADD_SALE_SUCCESS = '@sale/ADD_SALE_SUCCESS',
    DELETE_SALE = '@sale/DELETE_SALE',
    DELETE_SALE_SUCCESS = '@sale/DELETE_SALE_SUCCESS',
    UPDATE_SALE = '@sale/UPDATE_SALE',
    UPDATE_SALE_SUCCESS = '@sale/UPDATE_SALE_SUCCESS'
}