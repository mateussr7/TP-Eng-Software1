import { call, put, takeLatest } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { addEmployeeService, deleteEmployeeService, fetchEmployeesService, updateEmployeeService } from "../../services/employeeService";
import { addEmployeeSuccess, deleteEmployeeSuccess, fetchEmployeeSuccess, updateEmployeeSuccess } from "./actions";
import { Employee, EmployeeActions } from "./types";


export function* employeeSagas(){
    takeLatest(EmployeeActions.FETCH_EMPLOYEE, fetchEmployeesSagas)
    takeLatest(EmployeeActions.ADD_EMPLOYEE, addEmployeeSagas)
    takeLatest(EmployeeActions.DELETE_EMPLOYEE, deleteEmployeeSagas)
    takeLatest(EmployeeActions.UPDATE_EMPLOYEE, updateEmployeeSagas)
}

export function* fetchEmployeesSagas(){
    try{
        const employees: Employee[] = yield call(() => fetchEmployeesService())
        yield put(fetchEmployeeSuccess(employees))
    }catch(err){}
}

export function* addEmployeeSagas(action: AnyAction){
    try{
        const employee: Employee = action.payload.employee
        const returnedEmployee: Employee = yield call(() => addEmployeeService(employee))
        yield put(addEmployeeSuccess(returnedEmployee))
    }catch(err){}
}

export function* deleteEmployeeSagas(action: AnyAction){
    try{
        const id: number = action.payload.idEmployee
        const employee: Employee = yield call(() => deleteEmployeeService(id))
        yield put(deleteEmployeeSuccess(employee))
    }catch(err){}
}

export function* updateEmployeeSagas(action: AnyAction){
    try{
        const employee: Employee = action.payload.employee
        const returnedEmployee: Employee = yield call(() => updateEmployeeService(employee))
        yield put(updateEmployeeSuccess(returnedEmployee))
    }catch(err){}
}