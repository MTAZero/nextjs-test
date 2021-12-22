import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { APIService } from '../utils';
import { Provider, useDispatch, useSelector } from 'react-redux';

import { store } from '../redux/store';
import { useActions } from '../redux';

function MyApp({ Component, pageProps }: AppProps) {
    const isLoggedIn = store.getState().auth.isLoggedIn;
    const router = useRouter();

    useEffect(() => {
        let url = router.asPath;
        const publicPaths = ['/login', '/register'];
        const path = url.split('?')[0];
        if (!isLoggedIn && !publicPaths.includes(path)) {
            router.push({
                pathname: '/login',
                query: { returnUrl: router.asPath },
            });
        }
    }, [isLoggedIn]);

    return (
        <Provider store={store}>
            <h3>{isLoggedIn ? 'True' : 'False'}</h3>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
