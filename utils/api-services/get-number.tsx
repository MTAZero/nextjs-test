import createApiServices from './createApiServices';

const api = createApiServices();

// auth
const GetNumbers = (uname = '', password = '') => {
    const body = {
        password: password,
        username: uname,
    };
    return api.makeRequest({
        url: 'https://sitapi.minhngoc.com/app/api/result/public/fetch/vietnam/max3D/from/20210101/to/20210713?start=0&end=1&numberOfDigits=3',
        method: 'GET',
        data: body,
    });
};

export const Number = {
    GetNumbers,
};
