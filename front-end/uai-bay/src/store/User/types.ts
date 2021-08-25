export interface UserState {
    logged: boolean
    loggedUser: User | null
    users: User[]
}

export interface User {
    id?: number
    name?: string
    email?: string
    password?: string
    telephone?: string
    isAdmin?: boolean
    exclude?: boolean
    logged?: boolean
}

export interface UserDTO {
    id?: number
    name?: string
    email: string
    password: string
    telephone?: string
    isAdmin?: boolean
    inTrash?: boolean
    exclude?: boolean
    logged?: boolean
}

export enum UserActions {
    LOGIN = '@user/LOGIN',
    LOGIN_SUCCESS = '@user/LOGIN_USER',
    FETCH_USERS = '@user/FETCH_USERS',
    FETCH_USERS_SUCCESS = '@user/FETCH_USERS_SUCCESS'
}