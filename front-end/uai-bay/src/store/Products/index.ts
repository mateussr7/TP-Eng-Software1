import { Reducer } from "redux";
import { action } from "typesafe-actions";
import { Product, ProductActions, ProductState } from "./types";

const INITIAL_STATE: ProductState = {
  products: [
    {
      id: 1,
      name: "teste produto",
      description: "description",
      brand: "marca",
      amount: 1,
      exclude: false,
      productType: "type one",
      price: 10.0,
    },
    {
      id: 2,
      name: "teste produto 2",
      description: "description 2",
      brand: "marca 2",
      amount: 2,
      exclude: false,
      productType: "type two",
      price: 20.0,
    },
    {
      id: 3,
      name: "teste produto 3",
      description: "description 3",
      brand: "marca 3",
      amount: 3,
      exclude: false,
      productType: "type three",
      price: 30.0,
    },
  ],
  productInView: null,
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
