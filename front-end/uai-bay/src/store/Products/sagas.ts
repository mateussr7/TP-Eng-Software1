import { AnyAction } from "redux";
import { call, put, takeLatest } from "redux-saga/effects";
import { addProductService, deleteProductService, fetchProductsService, updateProductService } from "../../services/productServices";
import { addProductSuccess, deleteProductSuccess, fetchProductsSuccess, updateProductSuccess } from "./actions";
import { Product, ProductActions } from "./types";

export function* productSagas(){
    yield takeLatest(ProductActions.FETCH_PRODUCTS, fetchProductsSagas)
    yield takeLatest(ProductActions.ADD_PRODUCT, addProductSagas)
    yield takeLatest(ProductActions.DELETE_PRODUCT, deleteProductSagas)
    yield takeLatest(ProductActions.UPDATE_PRODUCT, updateProductSagas)
}

export function* fetchProductsSagas(){
    try{
        const products: Product[] = yield call(() => fetchProductsService())
        yield put(fetchProductsSuccess(products))
    }catch(err){}
}
 
export function* addProductSagas(action: AnyAction){
    try{
        const product: Product = action.payload.product
        const responseProduct: Product = yield call(() => addProductService(product))
        yield put(addProductSuccess(responseProduct))
    }catch(err){}
}

export function* deleteProductSagas(action: AnyAction){
    try{
        const idProduct = action.payload.idProduct
        const product: Product = yield call(() => deleteProductService(idProduct))
        yield put(deleteProductSuccess(product))
    }catch(err){}
}

export function* updateProductSagas(action: AnyAction){
    try{
        const productToUpdate: Product = action.payload.product
        const product: Product = yield call(() => updateProductService(productToUpdate))
        yield put(updateProductSuccess(product))
    }catch(err){}
}