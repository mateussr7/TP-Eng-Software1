import { ApplicationState } from "../store";

export const getProductsInCart = ({ cartReducer }: ApplicationState) =>
    cartReducer.productsInCart