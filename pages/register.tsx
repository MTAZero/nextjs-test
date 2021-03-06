import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Register.module.scss';
import { Formik } from 'formik';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const Register: NextPage = () => {
    const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
    const router = useRouter();

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

    return (
        <div className={styles.RegisterPage}>
            <Head>
                <title>Register Page</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Formik
                initialValues={{
                    fullname: '',
                    username: '',
                    password: '',
                    confirm_password: '',
                }}
                validate={(values: any) => {
                    const errors: any = {};
                    if (!values.fullname) {
                        errors.fullname = 'Fullname required';
                    }

                    if (!values.username) {
                        errors.username = 'Username required';
                    }
                    if (values.username == 'test')
                        errors.username = 'Username already exists';

                    if (!values.password) {
                        errors.password = 'Password required';
                    }

                    if (values.confirm_password != values.password)
                        errors.confirm_password =
                            'Confirm password do not match';
                    if (!values.confirm_password) {
                        errors.confirm_password = 'Confirm password required';
                    }

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(
                            'Register success\n' +
                                JSON.stringify(values, null, 2),
                        );
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div className={styles.RegisterForm}>
                            <div className={styles.RowInfo}>
                                <div className={styles.Title}>Fullname</div>
                                <div className={styles.RowContent}>
                                    <input
                                        type="text"
                                        className={styles.RowInfoTextBox}
                                        name="fullname"
                                        value={values.fullname}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={styles.Error}>
                                    {errors.fullname}
                                </div>
                            </div>

                            <div className={styles.RowInfo}>
                                <div className={styles.Title}>Username</div>
                                <div className={styles.RowContent}>
                                    <input
                                        type="text"
                                        name="username"
                                        className={styles.RowInfoTextBox}
                                        value={values.username}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={styles.Error}>
                                    {errors.username}
                                </div>
                            </div>

                            <div className={styles.RowInfo}>
                                <div className={styles.Title}>Password</div>
                                <div className={styles.RowContent}>
                                    <input
                                        type="password"
                                        name="password"
                                        className={styles.RowInfoTextBox}
                                        value={values.password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={styles.Error}>
                                    {errors.password}
                                </div>
                            </div>

                            <div className={styles.RowInfo}>
                                <div className={styles.Title}>
                                    Confirm Password
                                </div>
                                <div className={styles.RowContent}>
                                    <input
                                        type="password"
                                        name="confirm_password"
                                        className={styles.RowInfoTextBox}
                                        value={values.confirm_password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={styles.Error}>
                                    {errors.confirm_password}
                                </div>
                            </div>

                            <div className={styles.ControlPanel}>
                                <button
                                    className={styles.Button}
                                    style={{ backgroundColor: '#33cc33' }}
                                    type="submit"
                                >
                                    Register
                                </button>
                            </div>

                            <div
                                style={{ marginTop: 5 }}
                                className={styles.ControlPanel}
                            >
                                <Link href="/login">
                                    <div className={styles.Button}>Login</div>
                                </Link>
                            </div>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default Register;
