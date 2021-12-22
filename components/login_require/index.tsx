import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { RouterLinks } from '../const';
import { useActions } from '../../redux';

export const LoginRequireComponent = (props: any) => {
    const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

    const dispatch = useDispatch();
    const actions = useActions();

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
        <>
            <h3>
                {
                    isLoggedIn ? "TRue" : "False"
                }
            </h3>
            {
                props.children
            }
        </>
    );
};
