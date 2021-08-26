import { ApplicationState } from "../store";

export const getProducts = ({ productReducer }: ApplicationState) =>
    productReducer.products
