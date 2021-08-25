import { ApplicationState } from "../store";

export const getProducts = ({ productReducer }: ApplicationState) =>
    productReducer.products

export const getProductInView = ({ productReducer }: ApplicationState) =>
    productReducer.productInView