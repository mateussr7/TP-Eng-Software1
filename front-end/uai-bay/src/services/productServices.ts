import axios from 'axios'
import { Product, ProductDTO } from '../store/Products/types'
import { getWebServiceURL } from './utils/getURL'


export async function fetchProductsService(): Promise<Product[]> {
    const URL = getWebServiceURL('/product')
    const response: Product[] = await axios.get(URL)
    return response
}

export async function addProductService(product: Product): Promise<Product>{
    const URL = getWebServiceURL('/product/add')
    const response: Product = await axios.post(URL, product)
    return response
}

export async function deleteProductService(idProduct: number): Promise<Product>{
    const URL = getWebServiceURL('/product/delete')
    const response: Product = await axios.post(URL, idProduct)
    return response
}

export async function updateProductService(product: Product): Promise<Product>{
    const URL = getWebServiceURL('/product/update')
    const response: Product = await axios.post(URL, product)
    return response
}