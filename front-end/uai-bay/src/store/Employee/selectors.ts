import { ApplicationState } from "../store"

export const getEmployees = ({ employeeReducer }: ApplicationState) =>
    employeeReducer.employees
export const getEmployeeInView = ({ employeeReducer }: ApplicationState) =>
    employeeReducer.employeeInView