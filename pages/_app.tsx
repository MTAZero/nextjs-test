import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { APIService } from '../utils';
import { Provider, useDispatch, useSelector } from 'react-redux';

import { store } from '../redux/store';
import { useActions } from '../redux';
import { LoginRequireComponent, RightBar } from '../components';
import styles from '../styles/Home.module.css';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

const LayoutMain = (props: any) => {
    const dispatch = useDispatch();
    const actions = useActions();

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                // padding: 10,
                flex: 1,
                width: '100%'
            }}
        >
            <RightBar />
            <div
                style={{
                    display: 'flex',
                    flex: 1,
                    backgroundColor: '#f2f2f2',
                    paddingLeft: 10
                }}
            >
                {props.children}
            </div>
        </div>
    );
};

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
        <>
            <ReactNotification />
            <Provider store={store}>
                <div className={styles.main}>
                    {isRequireLogin ? (
                        <LoginRequireComponent>
                            <LayoutMain>
                                <Component {...pageProps} />
                            </LayoutMain>
                        </LoginRequireComponent>
                    ) : (
                        <Component {...pageProps} />
                    )}
                </div>
            </Provider>
        </>
    );
}

export default MyApp;
