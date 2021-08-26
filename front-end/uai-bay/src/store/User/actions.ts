import { action } from 'typesafe-actions'
import { User, UserActions, UserDTO } from './types'

export const login = (user: User) => action(UserActions.LOGIN, { user })
export const loginSuccess = (user: User) => action(UserActions.LOGIN_SUCCESS, { user }) 
export const fetchAllUsers = () => action(UserActions.FETCH_USERS, {})
export const fetchUsersSuccess = (userList: UserDTO[]) => action(UserActions.FETCH_USERS_SUCCESS, { userList })