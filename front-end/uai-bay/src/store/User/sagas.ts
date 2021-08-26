import { call, put, takeLatest } from "redux-saga/effects";
import { loginService, fetchUsersList } from "../../services/userServices";
import { AnyAction } from "redux";
import { loginSuccess, fetchUsersSuccess } from "./actions";
import { User, UserActions, UserDTO } from "./types";

export function* userSagas() {
  yield takeLatest(UserActions.LOGIN, loginSagas)
  yield takeLatest(UserActions.FETCH_USERS, fetchAllUsersSagas)
}

function* loginSagas(action: AnyAction) {
  try {
    const user: UserDTO = action.payload.user;
    console.log(user)
    const loggedUser: User = yield call(() => loginService(user));
    console.log(loggedUser)
    yield put(loginSuccess(loggedUser));
  } catch (err) {
    console.log(err)
  }
}

function* fetchAllUsersSagas(action: AnyAction) {
  try{
    const users : UserDTO[] = yield call(() => fetchUsersList())
    yield put(fetchUsersSuccess(users))
  }catch(err) {}
}
