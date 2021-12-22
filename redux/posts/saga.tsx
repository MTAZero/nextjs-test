import { all, takeEvery, fork, put, select } from 'redux-saga/effects';
import actions from './actions';

// helper
import { APIService, setLocalData, NotificationsService } from '../../utils';

function* saga_LoadListPosts(action: any) {
    try {
        const { username, password } = action.payload;

        let LoginResponse: Promise<any> = yield APIService.Auth.login(
            username,
            password,
        );
        let response: any = LoginResponse;
        response = response.data;

        if (response.token) {
            let sessionKey = response.token;
            setLocalData('token', sessionKey);
            const userInfo = response.userInfo;

            // login success
            yield put(
                actions.action.updateState({
                    session_key: sessionKey,
                    isLoggedIn: true,
                    isLoading: false,
                    userInfo,
                    current_user_info: userInfo,
                }),
            );
        } else {
            NotificationsService.error('Login error');
            // yield put(ChatActions.disconnectGateway());
        }
    } catch (ex: any) {
        console.log('[Post] saga_LoadListPosts Error : ', ex.message);
    }
}

function* saga_CreatePost() {
    try {

    } catch (ex: any) {
        console.log('[Post] saga_CreatePost Error : ', ex.message);
    }
}

function* listen() {
    yield takeEvery(actions.type.LOAD_LIST_POSTS, saga_LoadListPosts);
    yield takeEvery(actions.type.CREATE_POST, saga_CreatePost);
}

export default function* postSaga() {
    yield all([fork(listen)]);
}
