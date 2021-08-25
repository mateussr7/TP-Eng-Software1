import axios from 'axios'
import { Sale } from '../store/Sales/types'
import { getWebServiceURL } from './utils/getURL'

export async function fetchSalesFromCustomerService(idCustomer: number): Promise<Sale[]>{
    const URL = getWebServiceURL('/sales')
    const response: Sale[] = await axios.post(URL, idCustomer)
    return response    
}

export async function addSaleService(sale: Sale): Promise<Sale>{
    const URL = getWebServiceURL('/sales/add')
    const response: Sale = await axios.post(URL, sale)
    return response
}

export async function deleteSaleService(idSale: number): Promise<Sale>{
    const URL = getWebServiceURL('/sales/delete')
    const response: Sale = await axios.post(URL, idSale)
    return response
}

export async function updateSaleService(sale: Sale): Promise<Sale>{
    const URL = getWebServiceURL('/sales/update')
    const response: Sale = await axios.post(URL, sale)
    return response
}
