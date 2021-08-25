import { ApplicationState } from "../store"

export const getSales = ({ saleReducer }: ApplicationState) =>
    saleReducer.sales
export const getSaleInView = ({ saleReducer }: ApplicationState) =>
    saleReducer.saleInView