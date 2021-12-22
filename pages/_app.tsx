import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { APIService } from '../utils';
import { Provider, useDispatch, useSelector } from 'react-redux';

import { store } from '../redux/store';
import { useActions } from '../redux';
import { LoginRequireComponent } from '../components';

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    let isRequireLogin = true;
    let url = router.asPath;
    const publicPaths = ['/login', '/register'];
    const path = url.split('?')[0];
    if (publicPaths.includes(path)) {
        isRequireLogin = false;
    }

    return (
        <Provider store={store}>
            {isRequireLogin ? (
                <LoginRequireComponent>
                    <Component {...pageProps} />
                </LoginRequireComponent>
            ) : (
                <Component {...pageProps} />
            )}
        </Provider>
    );
}

export default MyApp;
