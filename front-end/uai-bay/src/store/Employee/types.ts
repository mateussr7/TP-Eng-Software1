export interface EmployeeState{
    employees: Employee[]
    employeeInView: Employee | null
}

export interface Employee{
    id?: number
    name?: string
    telephone?: string
    email?: string
    salary?: number
    exclude?: boolean
}


export enum EmployeeActions {
    FETCH_EMPLOYEE = '@employee/FETCH_EMPLOYEE',
    FETCH_EMPLOYEE_SUCCESS = '@employee/FETCH_EMPLOYEE_SUCCESS',
    ADD_EMPLOYEE = '@employee/ADD_EMPLOYEE',
    ADD_EMPLOYEE_SUCCESS = '@employee/ADD_EMPLOYEE_SUCCESS',
    DELETE_EMPLOYEE = '@employee/DELETE_EMPLOYEE',
    DELETE_EMPLOYEE_SUCCESS = '@employee/DELETE_EMPLOYEE_SUCCESS',
    UPDATE_EMPLOYEE = '@employee/UPDATE_EMPLOYEE',
    UPDATE_EMPLOYEE_SUCCESS = '@employee/UPDATE_EMPLOYEE_SUCCESS'
}