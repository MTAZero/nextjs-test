import { all, takeEvery, fork, put, select } from 'redux-saga/effects';
import actions from './actions';

// helper
import { APIService, setLocalData, NotificationsService } from '../../utils';

function* saga_LoadListPosts(action: any) {
    try {
        let RequestResponse: Promise<any> =
            yield APIService.Post.GetListPosts();
        let response: any = RequestResponse;

        if (response.code == 200) {
            console.log('response : ', response);
            yield put(actions.action.loadListPostsSuccess(response.data));
        }
    } catch (ex: any) {
        console.log('[Post] saga_LoadListPosts Error : ', ex.message);
    }
}

function* saga_CreatePost(action: any) {
    try {
        let post = action.payload.post;

        let RequestResponse: Promise<any> = yield APIService.Post.CreatePost(
            post,
        );
        let response: any = RequestResponse;
        if (response.code == 200) {
            NotificationsService.success('Create Feed Success');
            yield put(actions.action.loadListPosts());
        }
    } catch (ex: any) {
        console.log('[Post] saga_CreatePost Error : ', ex.message);
    }
}

function* saga_LikePost(action: any) {
    try {
        let postId = action.payload.postId;
        yield APIService.Post.LikePost(postId);

        yield put(actions.action.loadListPosts());
    } catch (ex: any) {
        console.log('[Post] saga_CreatePost Error : ', ex.message);
    }
}

function* listen() {
    yield takeEvery(actions.type.LOAD_LIST_POSTS, saga_LoadListPosts);
    yield takeEvery(actions.type.CREATE_POST, saga_CreatePost);
    yield takeEvery(actions.type.LIKE_POST, saga_LikePost);
}

export default function* postSaga() {
    yield all([fork(listen)]);
}
