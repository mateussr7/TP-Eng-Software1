import { Reducer } from 'redux'
import { Employee, EmployeeActions, EmployeeState } from './types'


const INITIAL_STATE: EmployeeState = {
    employees: [],
    employeeInView: null
}

const employeeReducer: Reducer<EmployeeState> = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case EmployeeActions.FETCH_EMPLOYEE_SUCCESS: {
            const employees: Employee[] = action.payload.employees
            return {
                ...state,
                employees: employees
            }
        }
        case EmployeeActions.ADD_EMPLOYEE_SUCCESS: {
            const employee: Employee = action.payload.employee
            return{
                ...state,
                employees: [...state.employees, employee]
            }
        }
        case EmployeeActions.DELETE_EMPLOYEE_SUCCESS: {
            const id: number = action.payload.idEmployee
            const employees = state.employees.filter((el) => el.id !== id)
            return{
                ...state,
                employees: employees
            }
        }
        case EmployeeActions.UPDATE_EMPLOYEE_SUCCESS: {
            const employee: Employee = action.payload.employee
            const employees = state.employees.filter((el) => el.id !== employee.id)
            const finalEmployees = employees.concat(employee)
            return{
                ...state,
                employees: finalEmployees
            }
        }
        default: {
            return state
        }
    }
}

export default employeeReducer