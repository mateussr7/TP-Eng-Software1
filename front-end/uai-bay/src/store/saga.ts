import { all } from "redux-saga/effects";
import { userSagas } from "./User/sagas";
import { productSagas } from "./Products/sagas";
import { employeeSagas } from "./Employee/sagas";
import { saleSagas } from "./Sales/sagas";

export default function* rootSaga() {
  yield all([userSagas(), productSagas(), employeeSagas(), saleSagas()]);
}
