import { getSessionKey } from '../../utils';
import actions from './actions';

const default_user = {
    _id: null,
    title: '',
    content: '',
    num_like: 0,
};

const initState = {
    posts: [],
};

const reducer = (state = initState, action: any) => {
    switch (action.type) {
        case actions.type.UPDATE_STATE:
            return {
                ...state,
                ...action.payload.state,
            };

        case actions.type.LOAD_LIST_POSTS:
            return state;

        case actions.type.LOAD_LIST_POSTS_SUCCESS:
            return {
                ...state,
                ...{
                    posts: action.payload.posts,
                },
            };

        case actions.type.CREATE_POST:
            return state;

        case actions.type.LIKE_POST:
            return state;

        default:
            return state;
    }
};

export default reducer;
