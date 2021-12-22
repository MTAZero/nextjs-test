import createApiServices from './createApiServices';

const api = createApiServices();

// auth
const GetListPosts = () => {
    return api.makeRequest({
        url: 'posts',
        method: 'GET',
    });
};

const CreatePost = (post: any) => {
    return api.makeAuthRequest({
        url: 'posts',
        method: 'POST',
        data: post,
    });
};

const LikePost = (post_id: any = null) => {
    return api.makeAuthRequest({
        url: `posts?post_id=${post_id}`,
        method: 'PUT',
        data: {},
    });
};

export const Post = {
    GetListPosts,
    CreatePost,
    LikePost,
};
