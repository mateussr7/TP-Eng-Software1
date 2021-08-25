import { Reducer } from 'redux'
import { User, UserActions, UserState } from './types'

const user = {id: 1, name: 'teste1', logged: false, email: 'email@gg.com', exclude: false, inTrash: false, isAdmin: false, password: '123', telephone: '9 9999-9999'}

const INITIAL_STATE: UserState = {
    logged: true,
    loggedUser: user,
    users: [user,
    {id: 2, name: 'teste2', logged: false, email: 'email2@gg.com', exclude: false, inTrash: false, isAdmin: false, password: '123', telephone: '9 9999-9999'}]
}

const userReducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UserActions.LOGIN_SUCCESS: {
            const user: User = action.payload.user
            return {
                ...state, 
                loggedUser: user,
                logged: true
            }
        }
        case UserActions.FETCH_USERS_SUCCESS: {
            const users = action.payload.userList
            return {
                ...state,
                users: users
            }
        }
        default: {
            return state
        }
    }
}

export default userReducer