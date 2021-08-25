import { action } from 'typesafe-actions'
import { Employee, EmployeeActions } from './types'

export const fetchEmployee = () => action(EmployeeActions.FETCH_EMPLOYEE, {})
export const fetchEmployeeSuccess = (employees: Employee[]) => action(EmployeeActions.FETCH_EMPLOYEE_SUCCESS, { employees })
export const addEmployee = (employee: Employee) => action(EmployeeActions.ADD_EMPLOYEE, { employee })
export const addEmployeeSuccess = (employee: Employee) => action(EmployeeActions.ADD_EMPLOYEE_SUCCESS, { employee })
export const deleteEmployee = (idEmployee: number) => action(EmployeeActions.DELETE_EMPLOYEE, { idEmployee })
export const deleteEmployeeSuccess = (employee: Employee) => action(EmployeeActions.DELETE_EMPLOYEE_SUCCESS, { employee })
export const updateEmployee = (employee: Employee) => action(EmployeeActions.UPDATE_EMPLOYEE, { employee })
export const updateEmployeeSuccess = (employee: Employee) => action(EmployeeActions.UPDATE_EMPLOYEE_SUCCESS, { employee }) 