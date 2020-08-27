import { take, call, put, select, takeEvery } from 'redux-saga/effects';
import { AUTHENTICATION } from './constants';
import { handleAuthentication } from './service';
// Individual exports for testing

function* checkAuth(action) {
  try {
    const credential = yield call(handleAuthentication, action.payload);
    yield put({
      type: 'SUCCESS',
    });
  } catch (e) {
    console.log(e);
  }
}

export default function* loginPageSaga() {
  yield takeEvery(AUTHENTICATION, checkAuth);
}
