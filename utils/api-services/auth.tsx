import createApiServices from './createApiServices';

const api = createApiServices();

// auth
const login = (uname = '', password = '') => {
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

const getUserInfo = () => {
    return api.makeAuthRequest({
        url: 'auth/my-info',
        method: 'GET',
        data: {},
    });
};

export const Auth = {
    login,
    getUserInfo,
};
