import createApiServices from './createApiServices';

const api = createApiServices();

// auth
const GetListPosts = (uname = '', password = '') => {
    const body = {
        password: password,
        username: uname,
    };
    return api.makeRequest({
        url: 'auth/login',
        method: 'POST',
        data: body,
    });
};

const CreatePost = () => {
    return api.makeAuthRequest({
        url: 'auth/get-info',
        method: 'GET',
        data: {},
    });
};

const LikePost = () => {
    return api.makeAuthRequest({
        url: 'auth/get-info',
        method: 'GET',
        data: {},
    });
};

export const Post = {
    GetListPosts,
    CreatePost,
    LikePost,
};
