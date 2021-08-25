import { action } from 'typesafe-actions'
import { Sale, SalesActions } from './types'

export const fetchSalesFromCustomer = (idCustomer: number) => action(SalesActions.FETCH_SALES_FROM_CUSTOMER, { idCustomer })
export const fetchSalesFRomCustomerSuccess = (sales: Sale[]) => action(SalesActions.FETCH_SALES_FROM_CUSTOMER_SUCCESS, { sales })
export const addSale = (sale: Sale) => action(SalesActions.ADD_SALE, { sale })
export const addSaleSuccess = (sale: Sale) => action(SalesActions.ADD_SALE_SUCCESS, { sale })
export const deleteSale = (idSale: number) => action(SalesActions.DELETE_SALE, { idSale })
export const deleteSaleSuccess = (idSale: number) => action(SalesActions.DELETE_SALE_SUCCESS, { idSale })
export const updateSale = (sale: Sale) => action(SalesActions.UPDATE_SALE, { sale })
export const updateSaleSuccess = (sale: Sale) => action(SalesActions.UPDATE_SALE_SUCCESS, { sale })