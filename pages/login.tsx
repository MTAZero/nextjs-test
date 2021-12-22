import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useActions } from '../redux';
import styles from '../styles/Login.module.scss';

const Login: NextPage = () => {
    const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
    const router = useRouter();

    const dispatch = useDispatch();
    const actions = useActions();

    let [username, setUserName] = useState('');
    let [password, setPassword] = useState('');

    if (isLoggedIn) {
        const returnUrl: any = router.query.returnUrl || '/';
        // router.push(returnUrl);

        router.push({
            pathname: returnUrl,
            query: {
                returnUrl: router.asPath,
            },
        });
    }

    const _handleLogin = () => {
        dispatch(actions.AuthActions.login(username, password));
    };

    return (
        <div className={styles.LoginPage}>
            <div className={styles.LoginPanel}>

                <div className={styles.RowInfo}>
                    <div className={styles.RowInfoTitle}>Username</div>
                    <div className={styles.RowInfoContent}>
                        <input
                            value={username}
                            onChange={(e) => {
                                setUserName(e.target.value);
                            }}
                            type="text"
                            className={styles.RowInfoTextBox}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') _handleLogin();
                            }}
                        />
                    </div>
                </div>

                <div className={styles.RowInfo}>
                    <div className={styles.RowInfoTitle}>Password</div>
                    <div className={styles.RowInfoContent}>
                        <input
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            type="password"
                            className={styles.RowInfoTextBox}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') _handleLogin();
                            }}
                        />
                    </div>
                </div>

                <div
                    className={styles.ControlPanel}
                    onClick={() => {
                        _handleLogin();
                    }}
                >
                    <div className={styles.Button}>Login</div>
                </div>
            </div>
        </div>
    )

    return (
        <div className={styles.Main}>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h3>Tài khoản</h3>
            <input
                type="text"
                value={username}
                onChange={(e) => {
                    setUserName(e.target.value);
                }}
            />

            <h3 className={styles.abc}>Mật khẩu
                
            </h3>
            <input
                type="text"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />

            <br />
            <button
                onClick={() => {
                    dispatch(actions.AuthActions.login(username, password));
                }}
            >
                Đăng nhập
            </button>
        </div>
    );
};

export default Login;
