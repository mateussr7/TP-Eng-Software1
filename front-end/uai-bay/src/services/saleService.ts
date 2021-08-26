import axios from 'axios'
import { Product } from '../store/Products/types'
import { Sale } from '../store/Sales/types'
import { getWebServiceURL } from './utils/getURL'

export async function fetchSalesFromCustomerService(idCustomer: number): Promise<Sale[]>{
    const URL = getWebServiceURL('/sales')
    const response: Sale[] = await axios.post(URL, idCustomer)
    return response    
}

export async function addSaleService(sale: Sale, products: Product[]): Promise<Sale>{
    const URL = getWebServiceURL('/sales/insert')
    const response = await axios.post(URL, {sale, products})
    return response.data as Sale
}

export async function deleteSaleService(idSale: number): Promise<Sale>{
    const URL = getWebServiceURL('/sales/delete')
    const response = await axios.post(URL, idSale)
    return response.data as Sale
}

export async function updateSaleService(sale: Sale): Promise<Sale>{
    const URL = getWebServiceURL('/sales/update')
    const response = await axios.post(URL, sale)
    return response.data as Sale
}
