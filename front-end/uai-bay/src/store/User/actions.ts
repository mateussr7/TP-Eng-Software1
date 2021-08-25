import { action } from 'typesafe-actions'
import { User, UserActions, UserDTO } from './types'

export const login = (userDTO: UserDTO) => action(UserActions.LOGIN, { userDTO })
export const loginSuccess = (userDTO: UserDTO) => action(UserActions.LOGIN_SUCCESS, { userDTO }) 
export const fetchAllUsers = () => action(UserActions.FETCH_USERS, {})
export const fetchUsersSuccess = (userList: UserDTO[]) => action(UserActions.FETCH_USERS_SUCCESS, { userList })