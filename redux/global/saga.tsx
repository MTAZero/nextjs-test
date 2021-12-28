import { all, takeEvery, fork, put, select } from 'redux-saga/effects';
import actions from './actions';

// helper
import { APIService, setLocalData, NotificationsService } from '../../utils';

function* saga_GetNumbers(action: any) {
    try {
        let RequestResponse: Promise<any> =
            yield APIService.Number.GetNumbers();
        let response: any = RequestResponse;

        if (response.message == 'success') {
            console.log('response : ', response);
            yield put(
                actions.action.getListNumberSuccess(response.result.results[0]),
            );
        }
    } catch (ex) {
        console.log('[Global]: saga_GetNumbers error ', ex);
    }
}

function* listen() {
    yield takeEvery(actions.type.GET_LIST_NUMBERS, saga_GetNumbers);
}

export default function* globalSaga() {
    yield all([fork(listen)]);
}
