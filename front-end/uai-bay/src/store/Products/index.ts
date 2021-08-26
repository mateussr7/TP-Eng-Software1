import { Reducer } from "redux";
import { Product, ProductActions, ProductState } from "./types";

const INITIAL_STATE: ProductState = {
  products: []
};

const productReducer: Reducer<ProductState> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case ProductActions.FETCH_PRODUCTS_SUCCESS: {
      const products: Product[] = action.payload.products;
      return {
        ...state,
        products: products,
      };
    }
    case ProductActions.ADD_PRODUCT_SUCCESS: {
      const product: Product = action.payload.product;
      return {
        ...state,
        products: [...state.products, product],
      };
    }
    case ProductActions.DELETE_PRODUCT_SUCCESS: {
      const id: number = action.payload.idProduct;
      const actualProducts = state.products.filter((el) => el.id !== id);
      return {
        ...state,
        products: actualProducts,
      };
    }
    default: {
      return state;
    }
  }
};

export default productReducer;
