import { all, call, put, takeLatest } from "redux-saga/effects";
import { loginService, fetchUsersList } from "../../services/userServices";
import { AnyAction } from "redux";
import { login, loginSuccess, fetchUsersSuccess } from "./actions";
import { User, UserActions, UserDTO } from "./types";

export function* userSagas() {
  yield takeLatest(UserActions.LOGIN, loginSagas)
  yield takeLatest(UserActions.FETCH_USERS, fetchAllUsersSagas)
}

function* loginSagas(action: AnyAction) {
  try {
    const user: UserDTO = action.payload.userDTO;
    const loggedUser: User = yield call(() => loginService(user));
    yield put(loginSuccess(loggedUser));
  } catch (err) {}
}

function* fetchAllUsersSagas(action: AnyAction) {
  try{
    const users : UserDTO[] = yield call(() => fetchUsersList())
    yield put(fetchUsersSuccess(users))
  }catch(err) {}
}
