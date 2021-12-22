const prefix = 'posts/';

const type = {
    UPDATE_STATE: prefix + 'update_state',

    LOAD_LIST_POSTS: prefix + 'load_list_posts',
    LOAD_LIST_POSTS_SUCCESS: prefix + 'load_list_posts_success',

    CREATE_POST: prefix + 'create_post',
};

const action = {

    updateState: (state: any) => {
        return {
            type: type.UPDATE_STATE,
            payload: {
                state
            }
        }
    },

    loadListPosts: () => {
        return {
            type: type.LOAD_LIST_POSTS,
            payload: {}
        }
    },
    loadListPostsSuccess: (posts = []) => {
        return {
            type: type.LOAD_LIST_POSTS_SUCCESS,
            payload: {
                posts
            }
        }
    },

    createPost: (post: any = {}) => {
        return {
            type: type.CREATE_POST,
            payload: {
                post
            }
        }
    }

};

export const PostActions = action;

export default {
    type,
    action,
};
