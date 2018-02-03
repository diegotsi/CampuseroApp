import { all } from "redux-saga/effects";
import sagaEvents from '../sagas/events';
import sagaUsers from '../sagas/user';


export default function* rootSaga () {
  yield all([
    sagaEvents(),
    sagaUsers()
  ])
}
