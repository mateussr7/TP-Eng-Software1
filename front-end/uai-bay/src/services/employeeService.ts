import axios from 'axios'
import { Employee } from '../store/Employee/types'
import { getWebServiceURL } from './utils/getURL'

export async function fetchEmployeesService(): Promise<Employee[]>{
    const URL = getWebServiceURL('/employee')
    const response: Employee[] = await axios.get(URL)
    return response
}

export async function addEmployeeService(employee: Employee): Promise<Employee>{
    const URL = getWebServiceURL('/employee/add')
    const response: Employee = await axios.post(URL, employee)
    return response
}

export async function deleteEmployeeService(idEmployee: number): Promise<Employee>{
    const URL = getWebServiceURL('/employee/delete')
    const response: Employee = await axios.post(URL, idEmployee)
    return response
}

export async function updateEmployeeService(employee: Employee): Promise<Employee>{
    const URL = getWebServiceURL('/employee/update')
    const response: Employee = await axios.post(URL, employee)
    return response
}