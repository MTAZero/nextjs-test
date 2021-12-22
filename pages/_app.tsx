import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { APIService } from '../utils';
import { Provider, useDispatch, useSelector } from 'react-redux';

import { store } from '../redux/store';
import { useActions } from '../redux';

function MyApp({ Component, pageProps }: AppProps) {
    // const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

    // const dispatch = useDispatch();
    // const actions = useActions();
    // const router = useRouter();

    // useEffect(() => {
    //     dispatch(actions.AuthActions.checkSession());
    // });

    // let url = router.asPath;
    // const publicPaths = ['/login'];
    // const path = url.split('?')[0];
    // if (!isLoggedIn && !publicPaths.includes(path)) {
    //     router.push({
    //         pathname: '/login',
    //         query: { returnUrl: router.asPath },
    //     });
    // }

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
