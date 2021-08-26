import axios from 'axios'
import { Employee } from '../store/Employee/types'
import { getWebServiceURL } from './utils/getURL'

export async function fetchEmployeesService(): Promise<Employee[]>{
    const URL = getWebServiceURL('/employee/list')
    const response = await axios.post(URL)
    return response.data.map((el: Employee) => ({
        ...el,
        id: el.id,
        name: el.name,
        telephone: el.telephone,
        email: el.email,
        salary: el.salary,
        exclude: el.exclude
    }))
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