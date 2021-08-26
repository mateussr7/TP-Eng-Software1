import { Reducer } from 'redux'
import { User, UserActions, UserState } from './types'


const INITIAL_STATE: UserState = {
    logged: false,
    loggedUser: null,
    users: []
}

const userReducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UserActions.LOGIN_SUCCESS: {
            const user: User = action.payload.user
            console.log(user)
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