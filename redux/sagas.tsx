import { all } from 'redux-saga/effects';

import authSaga from './auth/saga';
import globalSaga from './global/saga';
import postSaga from './posts/saga';

export default function* rootSaga() {
    yield all([authSaga(), postSaga(), globalSaga()]);
}
