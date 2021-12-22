import AuthReducer from './auth/reducer';
import GlobalReducer from './global/reducer';
import PostReducer from './posts/reducer';

const rootReducer = {
    auth: AuthReducer,
    global: GlobalReducer,
    posts: PostReducer,
};

export default rootReducer;
