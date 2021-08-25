import { action } from "typesafe-actions";
import { Product, ProductActions, ProductDTO } from "./types";

export const fetchProducts = () => action(ProductActions.FETCH_PRODUCTS, {});

export const fetchProductsSuccess = (products: Product[]) =>
  action(ProductActions.FETCH_PRODUCTS_SUCCESS, { products });

export const addProduct = (product: Product) =>
  action(ProductActions.ADD_PRODUCT, { product });

export const addProductSuccess = (product: Product) =>
  action(ProductActions.ADD_PRODUCT_SUCCESS, { product });

export const deleteProduct = (idProduct: number) =>
  action(ProductActions.DELETE_PRODUCT, { idProduct });

export const deleteProductSuccess = (product: Product) =>
  action(ProductActions.DELETE_PRODUCT_SUCCESS, { product });

export const updateProduct = (product: Product) => 
  action(ProductActions.UPDATE_PRODUCT, { product })

export const updateProductSuccess = (product: Product) =>
  action(ProductActions.UPDATE_PRODUCT_SUCCESS, { product })