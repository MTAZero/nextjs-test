import { all, takeEvery, fork, put, select } from 'redux-saga/effects';
import actions from './actions';

// helper
import { APIService, setLocalData, NotificationsService } from '../../utils';

function* saga_Login(action: any) {
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
            const userInfo = response.user_info;

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
        console.log('[Auth] Login Error : ', ex.message);

        // login error
        yield put(
            actions.action.updateState({
                session_key: null,
                isLoggedIn: false,
                userInfo: null,
                isLoading: false,
            }),
        );

        NotificationsService.error(
            'Username or password is not correct',
            'Login error',
        );
    }
}

function* saga_Logout() {
    try {
        setLocalData('token', null);
        NotificationsService.success('Logout success', 'Goodbye', 'top-center');

        // yield put(
        //     actions.action.resetState()
        // )

        yield put(
            actions.action.updateState({
                session_key: null,
                isLoggedIn: false,
                userInfo: null,
                isLoading: false,
            }),
        );
    } catch (ex: any) {
        console.log('[Auth] Logout Error : ', ex.message);
    }
}

function* saga_CheckSessionKey() {
    try {
        let _req: Promise<any> = yield APIService.Auth.getUserInfo();
        let req: any = _req;

        let userInfo = req.data;

        yield put(
            actions.action.updateState({
                userInfo,
                current_user_info: userInfo,
            }),
        );
    } catch (ex: any) {
        console.log('[Auth] saga_CheckSessionKey error : ', ex.message);

        yield put(
            actions.action.updateState({
                session_key: null,
                isLoggedIn: false,
                userInfo: null,
            }),
        );
        setLocalData('token', null);
    }
}

function* saga_Register(action: any) {
    try {
    } catch (ex) {
        NotificationsService.error('Register Error', '');
    }
}

function* listen() {
    yield takeEvery(actions.type.LOGIN, saga_Login);

    yield takeEvery(actions.type.CHECK_SESSION, saga_CheckSessionKey);
    yield takeEvery(actions.type.LOGOUT, saga_Logout);

    yield takeEvery(actions.type.REGISTER, saga_Register);
}

export default function* authSaga() {
    yield all([fork(listen)]);
}
